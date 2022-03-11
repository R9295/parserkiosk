import jinja2
from box import Box
from yaml import load as load_yaml
from importlib import resources as pkg_resources

try:
    from yaml import CLoader as YamlLoader
except ImportError:
    from yaml import Loader as YamlLoader

import argparse


def get_template(path, is_builtin):
    if is_builtin:
        return jinja2.Template(
            pkg_resources.read_text('parserkiosk.templates', f'{path}.jinja2')
        )
    with open(path, 'r') as template_file:
        return jinja2.Template(template_file.read())


def get_ext(template_name):
    match template_name:
        case 'node_js':
            return 'js'
        case 'python':
            return 'py'
        case _:
            return None


def generate_test(tests, test_type, compare_funcs, template, ext):
    with open(f'tests/test_{test_type.lower()}.{ext}', 'w') as test_file:
        test_file.write(
            template.render(
                tests=tests,
                test_func=f'{test_type}_FUNC',
                compare_funcs=compare_funcs,
            )
        )


def read_yaml(filename):
    with open(filename, 'r') as file:
        content = Box(load_yaml(file.read(), Loader=YamlLoader))
    return content.tests, content.compare_functions


def main():
    parser = argparse.ArgumentParser(description='Generator')
    parser.add_argument(
        'filename', action='store', help='Your .yaml file describing tests'
    )
    parser.add_argument(
        '--path',
        action='store',
        required=False,
        help='Use the built-in template for Python (pytest)',
    )
    parser.add_argument(
        '--ext',
        action='store',
        required=False,
        help='The extension for your test file(s), only needed for custom templates',
    )
    parser.add_argument(
        '--builtin',
        action='store',
        required=False,
        help='Use the built-in templates: pytest(Python), jest(Node.JS)',
    )
    args = parser.parse_args()
    tests, compare_funcs = read_yaml(args.filename)
    if args.builtin and args.path:
        print('Cannot generate two test-suites at a time!')
    elif not args.builtin and not args.path:
        print('Need a template to generate a test-suite')
    else:
        template = get_template(
            args.builtin or args.path, args.builtin is not None
        )
        ext = get_ext(args.builtin) or args.ext
        if not ext:
            print('Need an --ext parameter when using custom templates!')
        else:
            if tests.get('test_de_serialization'):
                generate_test(
                    tests.test_de_serialization,
                    'DE_SERIALIZE',
                    compare_funcs,
                    template,
                    ext,
                )
            if tests.get('test_serialization'):
                generate_test(
                    tests.test_serialization,
                    'SERIALIZE',
                    compare_funcs,
                    template,
                    ext,
                )

from importlib import resources as pkg_resources
from typing import Any, Dict, Literal, Union, List, Tuple
import jinja2
from box import Box
from yaml import load as load_yaml

from .colors import print_error, print_success

try:
    from yaml import CLoader as YamlLoader
except ImportError:
    from yaml import Loader as YamlLoader

import argparse


def get_template(path: str, is_builtin: bool) -> jinja2.Template:
    if is_builtin:
        return jinja2.Template(
            pkg_resources.read_text('parserkiosk.templates', f'{path}.jinja2')
        )
    with open(path, 'r') as template_file:
        return jinja2.Template(template_file.read())


def get_ext(template_name: str) -> str:
    match template_name:
        case 'node_js':
            return 'js'
        case 'python':
            return 'py'
        case _:
            raise Exception(f'Unsupported builtin template "{template_name}".')


def generate_test(
    tests: Dict[str, Any],
    test_type: Union[Literal['SERIALIZE'], Literal['DE_SERIALIZE']],
    compare_funcs: List[str],
    template: jinja2.Template,
    ext: str,
) -> None:
    with open(f'tests/test_{test_type.lower()}.{ext}', 'w') as test_file:
        test_file.write(
            template.render(
                tests=tests,
                test_func=f'{test_type}_FUNC',
                compare_funcs=compare_funcs,
            )
        )


def read_yaml(filename) -> Tuple[Dict[str, Any], List[str]]:
    with open(filename, 'r') as file:
        content = Box(load_yaml(file.read(), Loader=YamlLoader))
    return content.tests, content.compare_functions


def validate_cli_args(args) -> None:
    if args.builtin and args.path:
        raise Exception('Cannot generate two test-suites at a time.')
    elif not args.builtin and not args.path:
        raise Exception('Need a template to generate a test-suite.')
    if args.path and not args.ext:
        raise Exception(
            'Need an --ext parameter when using a custom template.'
        )


def main() -> None:
    parser = argparse.ArgumentParser(
        description='''Generate test suites for parsers in multiple languages.'''
    )
    parser.add_argument(
        'filename', action='store', help='Your .yaml file describing tests.'
    )
    parser.add_argument(
        '--path',
        action='store',
        required=False,
        help='Path to your custom jinja2 template.',
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
        help='Use a built-in templates: python(Python/pytest), node_js(Node.JS/jest).',
    )
    args = parser.parse_args()
    tests, compare_funcs = read_yaml(args.filename)
    try:
        validate_cli_args(args)
        ext = args.ext if args.ext else get_ext(args.builtin)
    except Exception as e:
        print_error(e)
        return
    template = get_template(
        args.builtin or args.path, args.builtin is not None
    )
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
    print_success('Done')

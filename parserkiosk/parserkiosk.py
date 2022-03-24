''''
Copyright (C) 2021  Aarnav Bos

This program is free software: you can redistribute it and/or modify

it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
'''
import argparse
import glob
import os
from importlib import resources as pkg_resources
from typing import Any, Dict

import jinja2
from box import Box
from yaml import load as load_yaml

from .colors import print_error, print_success

try:
    from yaml import CLoader as YamlLoader
except ImportError:
    from yaml import Loader as YamlLoader


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
    filename: str,
    tests: Dict[str, Any],
    config: Dict[str, Any],
    template: jinja2.Template,
    ext: str,
) -> None:
    try:
        with open(f'tests/{filename}.{ext}', 'w') as test_file:
            test_file.write(
                template.render(
                    tests=tests.tests,
                    test_func=f'{tests.type}_FUNC',
                    assert_funcs=config.assert_functions,
                )
            )
    except FileNotFoundError:
        os.mkdir(os.path.join(os.path.curdir, 'tests'))
        return generate_test(filename, tests, config, template, ext)


def read_yaml(filename) -> Dict[str, Any]:
    with open(filename, 'r') as file:
        return Box(load_yaml(file.read(), Loader=YamlLoader))


def validate_cli_args(args) -> None:
    if not os.path.exists(os.path.join(args.dir, 'config.yaml')):
        raise Exception('No config found in directory provided')
    if not os.path.isdir(args.dir):
        raise Exception('The dir provided is not a directory!')
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
        description='''Generate test suites for parsers in multiple languages.'''  # noqa E501
    )
    parser.add_argument(
        'dir',
        action='store',
        help='Your directory containing the test declaration and configuration',  # noqa E501
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
        help='The extension for your test file(s), only needed for custom templates',  # noqa E501
    )
    parser.add_argument(
        '--builtin',
        action='store',
        required=False,
        help='Use a built-in templates: python(Python/pytest), node_js(Node.JS/jest).',  # noqa E501
    )
    args = parser.parse_args()
    try:
        validate_cli_args(args)
        ext = args.ext if args.ext else get_ext(args.builtin)
    except Exception as e:
        print_error(e)
        return
    config = read_yaml(os.path.join(args.dir, 'config.yaml'))
    tests = glob.glob(f'{args.dir}/test_*.yaml')
    template = get_template(
        args.builtin or args.path, args.builtin is not None
    )
    for test in tests:
        test_yaml = read_yaml(test)
        test_file_name = test.split('/')[-1].replace('.yaml', '')
        generate_test(
            test_file_name,
            test_yaml,
            config,
            template,
            ext,
        )
    print_success('Done')

'''
Copyright (C) 2022 Aarnav Bos

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
from typing import Dict, List, Union

import jinja2
import yamale
from yaml import load as load_yaml

from .colors import print_error, print_success
from .schema import config_schema, test_schema
from .util import Box

try:
    from yaml import CLoader as YamlLoader
except ImportError:  # pragma: no cover
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
            # jest needs a .test prefix
            return 'test.js'
        case 'python':
            return 'py'
        case _:
            raise Exception(f'Unsupported builtin template "{template_name}".')


def generate_test(
    filename: str,
    tests: Box,
    config: Box,
    template: jinja2.Template,
    ext: str,
) -> None:
    try:
        with open(f'tests/{filename}.{ext}', 'w') as test_file:
            test_file.write(
                template.render(
                    tests=tests.tests,
                    func=(
                        config.serialize_function
                        if tests.type == 'SERIALIZE'
                        else config.de_serialize_function
                    ),
                    import_string=config.import_string,
                    assert_funcs=config.assert_functions,
                    is_dict=lambda x: isinstance(x, Box),
                )
            )
    except FileNotFoundError:
        os.mkdir(os.path.join(os.path.curdir, 'tests'))
        return generate_test(filename, tests, config, template, ext)


def read_yaml(filename, validation_schema=None) -> Box:
    with open(filename, 'r') as file:
        content = file.read()
        if validation_schema:
            data = yamale.make_data(content=content)
            yamale.validate(validation_schema, data)
    return Box(load_yaml(content, Loader=YamlLoader))


def validate_cli_args(args) -> None:
    if not os.path.isdir(args.dir):
        raise Exception('The dir provided is not a directory!')
    if not os.path.exists(os.path.join(args.dir, 'config.yaml')):
        raise Exception('No config found in directory provided')
    if args.builtin and args.path:
        raise Exception('Cannot generate two test-suites at a time.')
    elif not args.builtin and not args.path:
        raise Exception('Need a template to generate a test-suite.')
    if args.path and not args.ext:
        raise Exception(
            'Need an --ext parameter when using a custom template.'
        )


def parse_tests(
    tests: List[str],
    override: bool,
) -> Union[None, List[Dict[str, Union[str, Box]]]]:
    parsed_tests = []
    for test_file in tests:
        test_yaml = read_yaml(test_file)
        if override and os.path.exists(
            test_file.replace('.yaml', '.override.yaml')
        ):
            override_test_yaml = read_yaml(
                test_file.replace('.yaml', '.override.yaml')
            )
            test_yaml.merge(override_test_yaml)
        try:
            yamale.validate(test_schema, [(test_yaml, test_file)])
            parsed_tests.append(
                {
                    'name': test_file.split('/')[-1].replace('.yaml', ''),
                    'tests': test_yaml,
                }
            )
        except yamale.YamaleError as e:
            print_error(f'Error(s) in {test_file}:')
            print_error(str(e))
            return
    return parsed_tests


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
    parser.add_argument(
        '--override',
        action='store_true',
        required=False,
        help='Allow overriding a test files',
    )
    args = parser.parse_args()
    try:
        validate_cli_args(args)
        ext = args.ext if args.ext else get_ext(args.builtin)
    except Exception as e:
        print_error(e)
        return
    test_files = glob.glob(f'{args.dir}/test_*.yaml')
    test_files = [file for file in test_files if '.override.yaml' not in file]
    if len(test_files) == 0:
        print('No test files found. in {args.dir}')
        return
    template = get_template(
        args.builtin or args.path, args.builtin is not None
    )
    try:
        config = read_yaml(
            os.path.join(args.dir, 'config.yaml'),
            config_schema,
        )
    except yamale.YamaleError as e:
        print_error('Error(s) in config.yaml:')
        print_error(str(e))
        return
    if parsed_tests := parse_tests(test_files, override=args.override):
        for test in parsed_tests:
            generate_test(
                test.get('name'),
                test.get('tests'),
                config,
                template,
                ext,
            )
        print_success('Done')

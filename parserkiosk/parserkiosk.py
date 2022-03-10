from box import Box
from yaml import load as load_yaml
import jinja2

try:
    from yaml import CLoader as YamlLoader
except ImportError:
    from yaml import Loader as YamlLoader

import argparse


def generate_tests(tests, test_type, compare_funcs):
    template = None
    with open('templates/node_js.jinja2', 'r') as template_file:
        template = jinja2.Template(template_file.read())
    with open(f'tests/test_{test_type.lower()}.js', 'w') as test_file:
        test_file.write(
            template.render(
                tests=tests,
                test_func=f'{test_type}_FUNC',
                compare_funcs=compare_funcs,
            )
        )


def generate(filename):
    with open(filename, 'r') as file:
        content = Box(load_yaml(file.read(), Loader=YamlLoader))
    tests = content.tests
    compare_funcs = content.compare_functions
    if tests.get('test_de_serialization'):
        generate_tests(
            tests.test_de_serialization, 'DE_SERIALIZE', compare_funcs
        )
    if tests.get('test_serialization'):
        generate_tests(tests.test_serialization, 'SERIALIZE', compare_funcs)

def main():
    parser = argparse.ArgumentParser(description='Generator')
    parser.add_argument(
        'filename', action='store', help='Your .yaml file describing tests'
    )
    args = parser.parse_args()
    generate(args.filename)

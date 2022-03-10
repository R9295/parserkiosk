from box import Box
from yaml import load as load_yaml

from backends import PythonBackend

try:
    from yaml import CLoader as YamlLoader
except ImportError:
    from yaml import Loader as YamlLoader

import argparse


def generate_tests(tests, test_type):
    with PythonBackend(
        filename=f'test_{test_type.lower()}', test_type=test_type
    ) as backend:
        backend.initialize_test_file()
        for test_name, test_dict in tests.items():
            backend.parse_test(test_name, test_dict)


def generate(filename):
    with open(filename, 'r') as file:
        content = Box(load_yaml(file.read(), Loader=YamlLoader))
    tests = content.tests
    if tests.get('test_de_serialization'):
        generate_tests(tests.test_de_serialization, 'DE_SERIALIZE')
    if tests.get('test_serialization'):
        generate_tests(tests.test_serialization, 'SERIALIZE')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Generator')
    parser.add_argument(
        'filename', action='store', help='Your .yaml file describing tests'
    )
    args = parser.parse_args()
    generate(args.filename)

from box import Box
from yaml import load
from backends import PythonBackend

try:
    from yaml import CLoader as Loader
except ImportError:
    from yaml import Loader

import argparse


def generate_tests(tests, test_type):
    with PythonBackend(
        filename=f'test_{test_type}', test_type=test_type
    ) as backend:
        backend.initialize()
        for k, v in tests.items():
            backend.parse_test(k, v)


def generate(filename):
    with open(filename, 'r') as file:
        content = Box(load(file.read(), Loader=Loader))
    tests = content.tests
    if tests.get('test_de_serialization'):
        generate_tests(tests.test_de_serialization, 'de_serialization')
    if tests.get('test_serialization'):
        generate_tests(tests.test_serialization, 'serialization')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Generator')
    parser.add_argument(
        'filename', action='store', help='Your .yaml file describing tests'
    )
    args = parser.parse_args()
    generate(args.filename)

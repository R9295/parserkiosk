from contextlib import AbstractContextManager


class PythonBackend(AbstractContextManager):
    def __init__(self, filename, test_type=None):
        self.ext = 'py'
        self.test_type = test_type
        self.func = (
            'DE_SERIALIZE_FUNCTION'
            if test_type == 'de_serialization'
            else 'SERIALIZE_FUNCTION'
        )
        self.file = open(f'tests/{filename}.{self.ext}', 'w')
        self.fixture_dir = 'fixtures'

    def __enter__(self):
        return self

    def __exit__(self, *args, **kwargs):
        self.file.close()

    def initialize(self):
        self.write('from commons import *')
        self.write('')
        self.write(f'{self.func} = None')
        self.newline()
        self.newline()

    def write(self, content, newline=True, indent: int = 0):
        if indent:
            for i in range(indent):
                self.file.write('\t')
        self.file.write(content)
        if newline:
            self.file.write('\n')

    def newline(self):
        self.write('')

    def parse_test(self, name, test):
        self.write(f'def {name}():')
        if test.input.type == 'file':
            filename = test.input.arg
            self.write(
                f'with open("{self.fixture_dir}/{filename}", "r") as file:',
                indent=1,
            )
            self.write('data = file.read()', indent=2)
        if test.expect == 'fail':
            self.write('try:', indent=1)
            self.write(f'{self.func}(data)', indent=2)
            self.write("raise Exception('Did not fail!')", indent=2)
            self.write('except Exception as e:', indent=1)
            self.write('pass', indent=2)
        else:
            self.write(f'parsed = {self.func}(data)', indent=1)
            self.write(
                f'assert {test.expect.func}(parsed', indent=1, newline=False
            )
            if test.expect.arg:
                self.write(f', {test.expect.arg}', newline=False)
            self.write(')')
            self.newline()

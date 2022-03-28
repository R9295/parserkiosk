from importlib import resources as pkg_resources

import jinja2
from box import Box
from yaml import load as load_yaml

try:
    from yaml import CLoader as YamlLoader
except ImportError:
    from yaml import Loader as YamlLoader

default_cli_args = ['main', '.', '--builtin', 'python']
path_cli_args = ['main', '.', '--path', 'mytemplate.jinja2', '--ext', 'asd']
default_template = jinja2.Template(
    pkg_resources.read_text('parserkiosk.templates', 'python.jinja2')
)
default_test_yaml = '''---
type: "SERIALIZE"
tests:
  test_something:
      info: "Example Test"
      input:
        type: "str"
        arg: "hello, world"
      assert:
        func: "my_assert_function"
        arg: '["hello", " world"]'
'''
default_config_yaml = '''
---
import_string: "from my_parser import serialize, deserialize"
serialize_function: "serialize"
de_serialize_function: "deserialize"
assert_functions:
  - my_assert_function
'''


def parse_yaml(string):
    return Box(load_yaml(string, Loader=YamlLoader))

import os
from unittest.mock import patch

import pytest

from parserkiosk import parserkiosk
from parserkiosk.colors import CEND, CGREEN, CRED

from .utils import (
    default_cli_args,
    default_config_yaml,
    default_template,
    default_test_yaml,
    parse_yaml,
    path_cli_args,
)


def test_error_bad_template_name():
    try:
        parserkiosk.get_ext('unknown')
        pytest.fail('Did not raise an error')
    except Exception as e:
        assert str(e) == 'Unsupported builtin template "unknown".'


def test_raises_error_no_config(fs, capsys):
    with patch('sys.argv', default_cli_args):
        parserkiosk.main()
        assert (
            capsys.readouterr().out
            == f'{CRED}No config found in directory provided{CEND}\n'
        )


def test_raises_error_no_dir_provided(fs, capsys):
    cli_args = default_cli_args.copy()
    cli_args[1] = 'dir_doesnt_exist'
    with patch('sys.argv', cli_args):
        parserkiosk.main()
        assert (
            capsys.readouterr().out
            == f'{CRED}The dir provided is not a directory!{CEND}\n'
        )


def test_raises_error_two_suites(fs, capsys):
    fs.create_file('config.yaml')
    fs.create_file('mytemplate.jinja2')
    cli_args = default_cli_args.copy()
    cli_args.extend(['--path', 'test/mytemplate.jinja2'])
    with patch('sys.argv', cli_args):
        parserkiosk.main()
        assert (
            capsys.readouterr().out
            == f'{CRED}Cannot generate two test-suites at a time.{CEND}\n'  # noqa E501
        )


def test_raises_error_no_template(fs, capsys):
    fs.create_file('config.yaml')
    fs.create_file('test_asd.yaml')
    cli_args = default_cli_args.copy()[:2]
    with patch('sys.argv', cli_args):
        parserkiosk.main()
        assert (
            capsys.readouterr().out
            == f'{CRED}Need a template to generate a test-suite.{CEND}\n'  # noqa E501
        )


def test_raises_error_path_and_no_ext(fs, capsys):
    fs.create_file('config.yaml')
    fs.create_file('mytemplate.jinja2')
    cli_args = path_cli_args.copy()[:4]
    with patch('sys.argv', cli_args):
        parserkiosk.main()
        assert (
            capsys.readouterr().out
            == f'{CRED}Need an --ext parameter when using a custom template.{CEND}\n'  # noqa E501
        )


def test_creates_test_dir_on_not_existing(fs):
    parserkiosk.generate_test(
        'test_asd',
        parse_yaml(default_test_yaml),
        parse_yaml(default_config_yaml),
        default_template,
        'py',
    )
    assert os.path.exists('tests')


def test_custom_template(fs, capsys):
    fs.create_file('config.yaml', contents=default_config_yaml)
    fs.create_file('test_serialize.yaml', contents=default_test_yaml)
    fs.create_file('mytemplate.jinja2', contents='{{ import_string }}')
    with patch('sys.argv', path_cli_args):
        parserkiosk.main()
    assert capsys.readouterr().out == f'{CGREEN}Done{CEND}\n'
    assert os.path.exists('tests')
    assert os.path.exists('tests/test_serialize.asd')
    with open('tests/test_serialize.asd', 'r') as f:
        assert f.read() == 'from my_parser import serialize, deserialize'


def test_invalid_config(fs, capsys):
    fs.create_file(
        'config.yaml',
        contents='''---
assert_functions:
  - asdf
''',
    )
    # need to patch importlib as filesystem is faked so it won't find builtin template  # noqa E501
    with patch('importlib.resources.read_text') as patched_importlib:
        patched_importlib.return_value = '{{ import_string }}'
        with patch('sys.argv', default_cli_args):
            parserkiosk.main()
            out = capsys.readouterr().out
            assert 'Error(s) in config.yaml' in out
            assert 'Error validating data' in out


def test_invalid_test(fs, capsys):
    fs.create_file('config.yaml', contents=default_config_yaml)
    fs.create_file(
        'test_asdf.yaml',
        contents=default_test_yaml.replace('type: "SERIALIZE"', ''),
    )
    # need to patch importlib as filesystem is faked so it won't find builtin template  # noqa E501
    with patch('importlib.resources.read_text') as patched_importlib:
        patched_importlib.return_value = '{{ import }}'
        with patch('sys.argv', default_cli_args):
            parserkiosk.main()
            out = capsys.readouterr().out
            assert 'Error(s) in ./test_asdf.yaml' in out
            assert 'Error validating data' in out

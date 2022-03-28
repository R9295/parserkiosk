import pytest
from yamale import YamaleError, make_data, validate

from parserkiosk import parserkiosk

from .utils import default_test_yaml


def test_assert_validator_missing_func():
    test = default_test_yaml.replace('func: "my_assert_function"', '')
    test = make_data(content=test)
    with pytest.raises(YamaleError, match=r'.*Missing "func".*'):
        validate(parserkiosk.test_schema, test)


def test_assert_validator_too_many_keys():
    test = default_test_yaml.replace(
        'func: "my_assert_function"',
        'func: "my_assert_function"\n        extra_key: "1234"',  # noqa E501
    )
    test = make_data(content=test)
    with pytest.raises(
        YamaleError,
        match=r'.*Too many keys provided. Need only "func" and "arg".*',
    ):  # noqa E501
        validate(parserkiosk.test_schema, test)


def test_assert_validator_no_arg():
    test = default_test_yaml.replace('arg: \'["hello", " world"]\'\n', '')
    test = make_data(content=test)
    with pytest.raises(
        YamaleError,
        match='.*Need to provide an "arg" if "func" is not "fail".*',
    ):  # noqa E501
        validate(parserkiosk.test_schema, test)


def test_validator_arg_no_type():
    test = default_test_yaml.replace(
        "arg: '[\"hello\", \" world\"]'", 'arg:\n          arg: "1234"'
    )
    test = make_data(content=test)
    with pytest.raises(YamaleError, match=r'.*Missing "type" in assert.arg.*'):
        validate(parserkiosk.test_schema, test)


def test_assert_validator_incorrect_type():
    test = default_test_yaml.replace(
        'arg: \'["hello", " world"]\'', 'arg:\n          type: "bad"'
    )
    test = make_data(content=test)
    with pytest.raises(
        YamaleError,
        match=r'.*Invalid value for "type". Allowed: "raw", "file" or "str".*',
    ):
        validate(parserkiosk.test_schema, test)


def test_assert_validator_missing_assert_arg():
    test = default_test_yaml.replace(
        'arg: \'["hello", " world"]\'', 'arg:\n          type: "raw"'
    )
    test = make_data(content=test)
    with pytest.raises(YamaleError, match=r'.*Missing "arg".*'):
        validate(parserkiosk.test_schema, test)

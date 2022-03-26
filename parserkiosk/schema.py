from importlib import resources as pkg_resources
from typing import Any, Dict

from yamale import make_schema
from yamale.validators import DefaultValidators, Validator


class TestAssertValidator(Validator):
    tag = 'assert_validator'
    _err = ''

    def _is_valid(self, value: Dict[str, Any]) -> bool:
        func = value.get('func')
        if len(value.keys()) > 2 or not func or type(func) != str:
            self._err = 'Too many keys provided. Need only "func" and "arg"'
            return False
        if func != 'fail' and value.get('arg') is None:
            self._err = (
                'Need to provide an "arg" value if "func" is not "fail"'
            )
            return False
        return True

    def fail(self, value):
        return self._err


config_schema = make_schema(
    content=pkg_resources.read_text(
        'parserkiosk.schemas', 'config_schema.yaml'
    )
)

validators = DefaultValidators.copy()
validators[TestAssertValidator.tag] = TestAssertValidator

test_schema = make_schema(
    content=pkg_resources.read_text('parserkiosk.schemas', 'test_schema.yaml'),
    validators=validators,
)

from typing import Any, Dict

import yamale


class TestAssertValidator(yamale.validators.Validator):
    tag = 'assert_validator'

    def _is_valid(self, value: Dict[str, Any]) -> bool:
        valid = True
        func = value.get('func')
        if len(value.keys()) > 2 or not func or type(func) != str:
            return False
        if func != 'fail':
            valid = value.get('arg') is not None
        return valid


config_schema = yamale.make_schema(
    content='''
import_string: str()
serialize_function: str(required=False)
de_serialize_function: str(required=False)
assert_functions: list(str())
'''
)

validators = yamale.validators.DefaultValidators.copy()
validators[TestAssertValidator.tag] = TestAssertValidator


test_schema = yamale.make_schema(
    content='''
type: any(str(equals="DE_SERIALIZE"), str(equals="SERIALIZE"))
tests: map(str(starts_with="test_"), include('test'))
---

input:
    type: any(str(equals="raw"), str(equals="str"), str(equals="file"))
    arg: str()

assert: assert_validator()

test:
    info: str()
    input: include('input')
    assert: include('assert')
''',
    validators=validators,
)

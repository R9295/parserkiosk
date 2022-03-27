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

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
from functools import reduce
from importlib import resources as pkg_resources
from typing import Any, Dict

from yamale import make_schema
from yamale.validators import DefaultValidators, Validator


class TestAssertValidator(Validator):
    tag = 'assert_validator'
    _errors = []

    def _is_valid(self, value: Dict[str, Any]) -> bool:
        func = value.get('func')
        arg = value.get('arg')
        if func is None:
            self._errors.append('Missing "func"')
        if len(value.keys()) > 2:
            self._errors.append(
                'Too many keys provided. Need only "func" and "arg"'
            )
        if func != 'fail' and arg is None:
            self._errors.append(
                'Need to provide an "arg" if "func" is not "fail"'
            )
        else:
            if type(arg) == dict:
                if not arg.get('type'):
                    self._errors.append('Missing "type" in assert.arg')
                if arg.get('type') not in ['raw', 'file', 'str']:
                    self._errors.append(
                        'Invalid value for "type". Allowed: "raw", "file" or "str"'  # noqa E501
                    )
                if not arg.get('arg'):
                    self._errors.append('Missing "arg"')
        return len(self._errors) == 0

    def fail(self, value):
        error_text = reduce(lambda a, b: f'{a}\n{b}', self._errors)
        self._errors = []
        return error_text


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

## Basic Example
Let's write a simple "parser", it should:
1. Take a string containing words that are separated by commas
2. Should return a list of those words. 
3. Enforce atleast two entries in the list (two words, one comma)
---
1. Initialize parser module
``` python
$ mkdir parser
$ cd parser
$ touch __init__.py
```
2. Initialize serializer
``` python
# parser/serializer.py
def serialize(string):
    serialized = string.split(',')
    if len(serialized) < 2:
        raise Exception('Need atleast two entries')
    return serialized
```
3. Install dependencies (ParserKiosk and Pytest)
``` bash
pip install parserkiosk pytest
```
3. Write a simple ```config.yaml```
``` yaml
# parser/config.yaml
---
import_string: "from parser import serializer"
serialize_function: "serializer.serialize"
de_serialize_function: "serializer.de_serialize" # for the future :)
assert_functions:
  - assert_list_entries
```
4. Write a simple test case in ```test_serialize.yaml```
``` yaml
# parser/test_serialize.yaml
---
type: "SERIALIZE"
tests:
  test_something:
      info: "Example Test"
      input:
        type: "str"
        arg: "hello, world"
      assert:
        func: "assert_list_entries"
        arg: "[\"hello\", \" world\"]"
```
5. Run Parserkiosk
``` bash
$ parserkiosk . --builtin python
Done
$ cd tests
$ ls
test_serialize.py
$ cat test_serialize.py
```
``` python
# parser/tests/test_serialize.py
from parser import serializer
from .commons import (
    assert_list_entries,

)

def test_something():
    '''
    Example Test
    '''
    data = "hello, world"
    serialized_data = serializer.serialize(data)
    assert assert_list_entries(serialized_data, ["hello", " world"])
```
6. Let's write the ``assert_list_entries`` function
``` python
# parser/tests/commons.py
def assert_list_entries(a, b):
  for index, item in enumerate(a):
    if item != b[index]:
      return False
  return True
```
7. Add an ``__init__.py`` in ``tests/``
```
$ cd ..
$ touch tests/__init__.py
```
8. We should be able to run the suite!
``` bash
# in directory parser
$ pytest .
platform linux -- Python 3.10.2, pytest-7.0.1, pluggy-1.0.0
rootdir: /x/y/z/parser
collected 1 item
tests/test_serialize.py .                                                                                                                                                                                    [100%]

================================================================================================ 1 passed in 0.01s ================================================================================================

```

### Recap:
1. We wrote a simple data serialization format
2. We defined a function in ``config.yaml``  that we use to assert entries in our lists.
3. We defined a test for the serializer in a ``test_serialize.yaml`` 
4. We generated tests using parserkiosk
5. Ran the test-suite, which worked as expected

Let's go further to see more ParserKiosk functionality.

9. Let's write a test that is expected to fail, as we will supply less than two entries to our ``serialize`` function. We can use the builtin assert function ```fail```
``` yaml
# parser/test_serialize.yaml
---
type: "SERIALIZE"
tests:
  test_something:
      info: "Example Test"
      input:
        type: "str"
        arg: "hello, world"
      assert:
        func: "assert_list_entries"
        arg: "[\"hello\", \" world\"]"
  # Add this test
  test_error_less_than_two_comma_entries:
      info: "Should raise an error when given a string without any comma separated values"
      input:
        type: "str"
        arg: "helloworld"
      assert:
        func: "fail"
```
10. Generate tests
``` bash
$ parserkiosk . --builtin python
$ cat tests/test_serialize.py
from parser import serializer
from .commons import (
    assert_list_entries,

)

def test_something():
    '''
    Example Test
    '''
    data = "hello, world"
    serialized_data = serializer.serialize(data)
    assert assert_list_entries(serialized_data, ["hello", " world"])

def test_error_less_than_two_comma_entries():
    '''
    Should raise an error when given a string without any comma separated values
    '''
    data = "helloworld"
    try:
        serialized_data = serializer.serialize(data)
        assert False
    except Exception as e:
        pass
```
11. Run tests!
``` bash
# in dir parser/
$ pytest -s .
============================================= test session starts ==============================================
platform linux -- Python 3.10.2, pytest-7.0.1, pluggy-1.0.0
rootdir: /x/y/z/parser
collected 2 items

tests/test_serialize.py ..

============================================== 2 passed in 0.01s ===============================================
```
We successfully generated a test where we can assert that an error was raised.  
Importing and assigning these functions everytime we generate tests is annoying, a feature to **remove** this labour is **WIP**.

### Let's add deserialization functionality to our serializer
12. Add a ``de_serialize`` function to convert data back into a string.
``` python
# parser/serializer.py
from functools import reduce  # add this


def serialize(string):
    serialized = string.split(',')
    if len(serialized) < 2:
        raise Exception('Need atleast two entries')
    return serialized


# add this function
def de_serialize(array):
    return reduce(lambda a, b: f'{a},{b}', array)
```
13. Define tests for this function
``` yaml
# WARNING: This is a new ymal file! test_de_serialize not test_serialize
# parser/test_de_serialize.yaml
---
type: "DE_SERIALIZE"
tests:
  test_de_serialize:
      info: "Should return a string of words separated by commas"
      input:
        type: "raw"
        arg: "[\"hello\", \" world\"]"
      assert:
        func: "assert_string"
        arg: "\"hello, world\""
```
14. Add new assert function in our config
``` yaml
# parser/config.yaml
---
import_string: "from parser import serializer"
serialize_function: "serializer.serialize"
de_serialize_function: "serializer.de_serialize"
assert_functions:
  - assert_list_entries
  - assert_string # this
```
15. Define the function in the commons file
``` python
# parser/tests/commons.py
def assert_list_entries(a, b):
  for index, item in enumerate(a):
    if item != b[index]:
      return False
  return True

# this function
def assert_string(a, b):
    return a == b
```
16. Generate tests
``` bash
# in dir parser
$ parserkiosk . --builtin python
$ ls tests/
commons.py  __init__.py  __pycache__  test_de_serialize.py  test_serialize.py
```

17. Run tests!
``` bash
============================================= test session starts ==============================================
platform linux -- Python 3.10.2, pytest-7.0.1, pluggy-1.0.0
rootdir: /x/y/z/parser
collected 3 items

tests/test_de_serialize.py .
tests/test_serialize.py ..

============================================== 3 passed in 0.01s ===============================================
```

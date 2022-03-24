## Basic Example
Let's write a simple "serializer", it should:
1. Take a string containing words that are separated by commas
2. Should return a list of those words. 
3. Enforce atleast two entries in the list (two words, one comma)
---
1. Initialize serializer

``` python
# serializer.py
def serialize(string):
    serialized = string.split(',')
    if len(serialized) < 2:
        raise Exception('Need atleast two entries')
    return serialized
```
2. Install Parserkiosk
``` bash
pip install parserkiosk
```
3. Write a simple ```config.yaml```
``` yaml
# config.yaml
---
assert_functions:
  - assert_list_entries
```
4. Write a simple test case in ```test_serialize.yaml```
``` yaml
# test_serialize.yaml
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
# tests/test_serialize.py
from commons import (
    assert_list_entries,
)

# ASSIGN ME
SERIALIZE_FUNC = None

def test_something():
    '''
    Example Test
    '''
    data = "hello, world"
    serialized_data = SERIALIZE_FUNC(data)
    assert assert_list_entries(serialized_data, ["hello", " world"])
```
6. Let's write the ``assert_list`` function
``` python
# tests/commons.py
def assert_list_entries(a , b):
  for index, item in enumerate(a):
    if item != b[index]:
      return False
  return True
```
7. Now we should be ready to run! Usually, SERIALIZE_FUNC would be from a module but since we just have a file, we need to copy it into the test dir
```
$ cd ..
$ mv serializer.py tests/
```
8. Edit tests/test_serialize.py
``` python
# tests/test_serialize.py
from serialier import serialize # import
from commons import (
    assert_list_entries,
)

SERIALIZE_FUNC = serialize # set the serialize function

def test_something():
    '''
    Example Test
    '''
    data = "hello, world"
    serialized_data = SERIALIZE_FUNC(data)
    assert assert_list_entries(serialized_data, ["hello", " world"])
```
9. We should be able to run the suite!
``` bash
$ cd tests
$ pytest .
platform linux -- Python 3.10.2, pytest-7.0.1, pluggy-1.0.0
rootdir: /home/x/y/z/tests
collected 1 item
test_serialize.py .                                                                                                                                                                                         [100%]

================================================================================================ 1 passed in 0.01s ================================================================================================

```

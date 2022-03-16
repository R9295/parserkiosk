## Basic Example
1. Let's write a simple "serializer":
``` bash
$ vim serializer.py
```
``` python
def serialize(my_str):
  return my_str.split(',')
```
2. Install Parserkiosk
``` bash
pip install parserkiosk
```
3. Write a simple ```config.yaml```
``` yaml
---
assert_functions:
  - assert_list
```
4. Write a simple test case in ```test_serialize.yaml```
``` yaml
---
type: "SERIALIZE"
tests:
  test_something:
      info: "Example Test"
      input:
        type: "raw"
        arg: '"hello, world"'
      assert:
        func: "assert_list"
        arg: "[\"hello\", \"world\"]"
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
from commons import (
    assert_list,
)

# ASSIGN ME
SERIALIZE_FUNC = None

def test_something():
    '''
    Example Test
    '''
    data = "hello, world"
    serialized_data = SERIALIZE_FUNC(data)
    assert assert_list(serialized_data, ["hello", "world"])
```
6. Let's write the ``assert_list`` function
``` bash
$ vim commons.py
```
``` python
def assert_list(a , b):
  for index, item in enumerate(a):
    if not item == b[index]:
      return False
  return True
```

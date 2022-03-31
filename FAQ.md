# FAQ

Q. What if the internal representation's syntax is different in the target language?  
A. You can use the ``--override`` option.  
Let's say you had a ``test_serialize.yaml``:
``` yaml
# test_serialize.yaml
type: "SERIALIZE"
tests:
  test_something:
      info: "Example Test"
      input:
        type: "str"
        arg: "hello, world"
      assert:
        func: "my_assert_function"
        arg: "[\"hello\", \" world\"]"
```
You can create another file called ``test_serialize.override.yaml`` with:
``` yaml
# test_serialize.override.yaml

tests:
  test_something:
    info: "overriden info" # overriden
    assert:
      arg: "{'hello', ' world'}" # overriden
```
And generate tests with ```override option```
``` bash
$ parserkiosk . --builtin python --override 
```
It should override the arg and info values. Like this you can maintain your language's tests separately if you have special requirements

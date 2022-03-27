## ParserKiosk: A Proof of Concept multi-lingual test generation suite intended for parsers

![](https://img.shields.io/github/commit-activity/w/R9295/parserkiosk?style=flat-square)
![](https://img.shields.io/github/issues/R9295/parserkiosk?style=flat-square)
![](https://img.shields.io/pypi/v/parserkiosk?style=flat-square)
![](https://pepy.tech/badge/parserkiosk)
![](https://img.shields.io/pypi/format/parserkiosk?style=flat-square)
![](https://img.shields.io/badge/code%20style-black-000000.svg)

### Motivation
After reading this [article](https://seriot.ch/projects/parsing_json.html) and [this one](https://bishopfox.com/blog/json-interoperability-vulnerabilities), I am now paranoid and under the assumption that implementations of data serialization and deserialization have a lot of quirks that differ from language to language, and implementation to implementation.

This _could_ lead to serious security issues as applications, especially web applicatons _usually_ utilize multiple services, written in multiple languages that use the same format to communicate. 

Reference implementations usually provide tests, but translating them from language to language is tiresome and tedious. I wanted to compose a library to generate **simple**, functional tests for multiple languages with minimal repitition. 

### Usage
1. Install 
``` bash
$ pip install parserkiosk
```
2. Define a ``config.yaml``
``` yaml
# config.yaml
---
import_string: "from my_parser import serialize, deserialize"
serialize_function: "serialize"
de_serialize_function: "deserialize"
assert_functions:
  - my_assert_function
```
3. Define a yaml file prefixed with ``test_`` in the same directory as ``config.yaml``
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
4. Run parserkiosk in the same directory as ```config.yaml``` and ``test_serialize.yaml``
``` bash
$ parserkiosk . --builtin python
```
5. See output directory ```tests/```
``` bash
$ ls tests/
test_serialize.py
```


#### See [HOWTO](HOWTO.md) for a complete guide.

### How does it work?
Parserkiosk uses ``jinja2`` templates to generate test cases from ``yaml`` file(s). You can either expect something to fail(raise an "exception" or "error") or use a function that you define in a special file called ```commons``` to assert if the parsed data matches the expected internal representation. 

Let's say you've written a reference implementation of your data de/serialization format in ``Go`` and I wanted to implement it in ``Python``.  
All I would need to do to implement your test-suite is:
1. Write a ```commons.py``` file implementing the same assertion functions that you've written in your ``commons.go`` file
2. Adapt your parserkiosk config to use my implementation
3. Run ```$ parserkiosk folder_with_yaml_test_files/ --builtin python``` and _voila_ I have your entire test suite implemented!

For more on this, see ```examples/json/```

### Languages supported
- [x] Python / pytest / ``python``
- [x] NodeJS / jest (sync) / ``node_js``
- [ ] NodeJS / jest (async)
- [ ] Lua 
- [ ] Go
- [ ] Java
- [ ] PHP
- [ ] Perl
- [ ] Ruby
- [ ] ...

### License
All work is licensed under ```GPL-3.0``` excluding the example JSON test-suite which is licensed under ```MIT```

### Contributing
Issues, feedback and pull requests are welcome. I have tried _my best_ to keep the code simple. Please keep in mind that I wish to limit features that we accomodate to keep it simple. Tests should be simple and readable.
### Installing for development:
``` bash
$ git clone https://github.com/you/your-fork-of-parserkiosk.git
$ cd your-fork-of-parserkiosk
$ poetry install
$ poetry run pre-commit install
# do some changes
$ ./runtests.sh
# you are ready!
```
### Thanks
Special thanks to [nst](https://github.com/nst/) for inspiring Parserkiosk. All test cases in ``examples/json`` come from his [incredible work](https://github.com/nst/JSONTestSuite)

## ParserKiosk: A multi-lingual test generation suite intended for parsers

### Motivation
After reading this [article](https://seriot.ch/projects/parsing_json.html) and [this one](https://bishopfox.com/blog/json-interoperability-vulnerabilities), I am now under the assumption that implementations of data serialization and deserialization have a lot of quirks that differ from language to language, and implementation to implementation. This _could_ lead to serious security issues as applications, especially web applicatons _usually_ utilize multiple services, written in multiple languages that use the same format to communicate. Reference implementations usually provide tests, but translating them from language to language is tiresome and tedious. I wanted to compose a library to generate **simple**, functional tests for multiple languages with minimal repitition. 

### How does it work?
Parserkiosk uses ``jinja2`` templates to generate test cases from ``yaml`` file(s). You can either expect something to fail(raise an "exception" or "error") or use a function that you define in a special file called ```commons``` to assert if the parsed data matches the expected internal representation. 

Let's say you've written a reference implementation of your data de/serialization format in ``Go`` and I wanted to implement it in ``Python``. All I would need to do is write a ```commons.py``` file implementing the same assertion functions that you've written in ``Go`` and run ```$ parserkiosk folder_with_yaml_test_files/ --builtin python``` and _voila_ I have your entire test suite implemented!

For more on this, see ```examples/json/```

### Languages supported
- [x] Python pytest
- [x] NodeJS jest (sync)
- [ ] NodeJS jest (async)
- [ ] Go
- [ ] Java
- [ ] PHP
- [ ] Perl
- [ ] Ruby
- [ ] ...

### How do I use it?
1. Install Parserkiosk
```
pip install parserkiosk
```
2. Write a simple ```config.yaml```
```
compare_functions:
  - assert_dict
```
3. Write a simple test case in ```test_serialize.py```
```
---
type: "SERIALIZE"
tests:
  test_something:
      info: "Example Test"
      input:
        type: "raw"
        arg: '"hello, world"'
      assert:
        func: "assert_dict"
        arg: '"[\"hello\", \"world \"]"'
```
4. Run Parserkiosk
``` bash
$ parserkiosk . --builtin python
$ Done
$ cd tests
ls
```

### License
All work is licensed under ```GPL-3.0```

### Contributing
Issues, feedback and pull requests are welcome. I have tried _my best_ to keep the code simple. Please keep in mind that I wish to limit features that we accomodate to keep it simple. Tests should be simple and readable.

### Thanks
Special thanks to [nst](https://github.com/nst/) for inspiring Parserkiosk. All test cases in ``examples/json`` come from his [incredible work](https://github.com/nst/JSONTestSuite)

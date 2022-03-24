## ParserKiosk: A multi-lingual test generation suite intended for parsers

### Motivation
After reading this [article](https://seriot.ch/projects/parsing_json.html) and [this one](https://bishopfox.com/blog/json-interoperability-vulnerabilities), I am now paranoid and under the assumption that implementations of data serialization and deserialization have a lot of quirks that differ from language to language, and implementation to implementation.

This _could_ lead to serious security issues as applications, especially web applicatons _usually_ utilize multiple services, written in multiple languages that use the same format to communicate. 

Reference implementations usually provide tests, but translating them from language to language is tiresome and tedious. I wanted to compose a library to generate **simple**, functional tests for multiple languages with minimal repitition. 

### How does it work?
Parserkiosk uses ``jinja2`` templates to generate test cases from ``yaml`` file(s). You can either expect something to fail(raise an "exception" or "error") or use a function that you define in a special file called ```commons``` to assert if the parsed data matches the expected internal representation. 

Let's say you've written a reference implementation of your data de/serialization format in ``Go`` and I wanted to implement it in ``Python``.  
All I would need to do to implement your test-suite is:
1. Write a ```commons.py``` file implementing the same assertion functions that you've written in your ``commons.go`` file
2. Run ```$ parserkiosk folder_with_yaml_test_files/ --builtin python``` and _voila_ I have your entire test suite implemented!

For more on this, see ```examples/json/```

### Languages supported
- [x] Python / pytest / ``python``
- [x] NodeJS / jest (sync) / ``node_js``
- [ ] NodeJS / jest (async)
- [ ] Go
- [ ] Java
- [ ] PHP
- [ ] Perl
- [ ] Ruby
- [ ] ...

### How do I use it?
See [HOWTO](HOWTO.md)

### License
All work is licensed under ```GPL-3.0```

### Contributing
Issues, feedback and pull requests are welcome. I have tried _my best_ to keep the code simple. Please keep in mind that I wish to limit features that we accomodate to keep it simple. Tests should be simple and readable.

### Thanks
Special thanks to [nst](https://github.com/nst/) for inspiring Parserkiosk. All test cases in ``examples/json`` come from his [incredible work](https://github.com/nst/JSONTestSuite)

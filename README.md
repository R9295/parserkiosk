## ParserKiosk: A multi-lingual test generation suite intended for parsers

### Motivation
After reading this [article](https://seriot.ch/projects/parsing_json.html) and [this one](https://bishopfox.com/blog/json-interoperability-vulnerabilities), I realized that implementations of data serialization and deserialization have a lot of quirks that differ from language to language, and implementation to implementation. This could lead to serious security issues as applications, especially web applicatons usually utilize multiple services, written in multiple languages that use the same format to communicate. Reference implementations usually provide tests, but translating them from language to language is tiresome and tedious. I wanted to compose a library to generate **simple**, functional tests for multiple languages with minimal repitition. 

### How does it work?
Parserkiosk uses ``jinja2`` templates to generate test cases from ``yaml`` file(s). You can either expect something to fail(raise an "exception" or "error") or use a function that you define in a special file called ```commons``` to assert if the parsed data matches an expected internal representation

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

### License
All work is licensed under SPDX-Identifier ```GPL-3.0```

### Contributing

### Thanks

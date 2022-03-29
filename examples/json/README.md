### JSON RFC 8259 (WIP)

1. Python
``` bash
$ pip install deepdiff parserkiosk
$ parserkiosk . --builtin python
$ cd tests
$ pytest -s .
```
2. Node.js 
``` bash
$ pip install parserkiosk
$ mv config.yaml python.config.yaml
$ mv node.config.yaml config.yaml
$ parserkiosk . --builtin node_js
$ cd tests
$ npx jest
```
3. Others
``` bash
$ pip install parserkiosk
$ mv config.yaml python.config.yaml
$ vim config.yaml # write your own config
$ parserkiosk . --path mytemplate.jinja2 --ext my.file.extension
$ cd tests 
# run the tests! You may need to adapt the files a little.
```

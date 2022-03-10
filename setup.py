import os
from setuptools import setup

# Utility function to read the README file.
# Used for the long_description.  It's nice, because now 1) we have a top level
# README file and 2) it's easier to type in the README file than to put a raw
# string in below ...
def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(
    name = "parserkiosk",
    version = "0.0.1",
    author = "Aarnav Bos",
    author_email = "aarnavbos@gmail.com",
    description = 'A parser test-case generation suite',
    license = "GPL-3.0",
    keywords = "parsers testing test parser code generation",
    url = "https://github.com/R9295/parser-kiosk",
    packages=['parserkiosk', 'tests'],
    long_description=read('README.md'),
    classifiers=[],
    entry_points = {
        'console_scripts': ['parserkiosk=parserkiosk:main']
    }
)



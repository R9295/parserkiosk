#!/bin/bash
poetry run coverage run -o -m pytest -s tests/
poetry run coverage report

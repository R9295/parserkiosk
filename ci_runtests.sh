#!/bin/bash
poetry run coverage run  -m pytest -s tests/
# coveralls needs lcov, thus forcing a different command
poetry run coverage lcov


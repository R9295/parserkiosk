#!/bin/bash
poetry run coverage run -m pytest -s tests/
poetry run coverage report

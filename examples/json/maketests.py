import os
import sys

from parserkiosk import colors

langs = ['python', 'node_js', 'ruby', 'php']


if __name__ == "__main__":
    if len(sys.argv) < 2:
        colors.print_error('Please provide a language to make tests for!')
    elif len(sys.argv) > 2:
        colors.print_error('Too many arguments provided')
    else:
        lang = sys.argv[1]
        if lang not in langs:
            colors.print_error('Language not supported')
            colors.print_error('Supported:')
            for lang in langs:
                colors.print_error(lang)
        else:
            os.system(f'cp -r base {lang}/tests')
            os.system(f'cp test_serialize_succ.yaml {lang}/')
            os.system(f'cp test_serialize_fail.yaml {lang}/')
            os.chdir(f'{lang}')
            os.system(f'parserkiosk . --builtin {lang} --override')
            colors.print_success(
                f'cd into {lang} and follow the README to run tests'
            )

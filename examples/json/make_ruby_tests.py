import glob
import os

import parserkiosk

tests = glob.glob('tests/test_*.rb')

for file in tests:
    parserkiosk.colors.print_success(f'Doing file {file}')
    os.system(f'mv {file} {file.split(".rb")[0]}_spec.rb')

print('')
parserkiosk.colors.print_success('Done')

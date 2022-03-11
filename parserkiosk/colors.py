CRED = '\033[91m'
CEND = '\033[0m'
CGREEN = '\033[32m'


def print_error(text):
    print(f'{CRED}{text}{CEND}')


def print_success(text):
    print(f'{CGREEN}{text}{CEND}')

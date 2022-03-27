from parserkiosk.colors import CEND, CGREEN, CRED, print_error, print_success


def test_print_success(capsys):
    print_success('Success')
    assert capsys.readouterr().out == f'{CGREEN}Success{CEND}\n'


def test_print_error(capsys):
    print_error('Error')
    assert capsys.readouterr().out == f'{CRED}Error{CEND}\n'

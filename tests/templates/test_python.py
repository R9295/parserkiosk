import jinja2

from parserkiosk import parserkiosk

TEMPLATE_NAME = 'python'


def test_correct_ext_from_template():
    ext = parserkiosk.get_ext(TEMPLATE_NAME)
    assert ext == 'py'


def test_correct_template_from_path():
    template = parserkiosk.get_template(TEMPLATE_NAME, is_builtin=True)
    assert isinstance(template, jinja2.Template)

def assert_dict(a, b):
    # to improve
    return a == b


def assert_list(a, b):
    # won't work with nested lists
    asserts = []
    assert len(a) == len(b)
    for index, item in enumerate(a):
        b_item = b[index]
        asserts.append(item == b_item and type(item) == type(b_item))
    return all(asserts)


def assert_float(a, b):
    return isinstance(a, float) and isinstance(b, float) and a == b

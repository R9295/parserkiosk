import collections


def merge_dict(dict1: dict, dict2: dict) -> dict:
    """
    An actually good deep merge
    https://stackoverflow.com/a/61708681
    """
    q = collections.deque([(dict1, dict2)])
    while len(q) > 0:
        d1, d2 = q.pop()
        for k, v in d2.items():
            if k in d1 and isinstance(d1[k], dict) and isinstance(v, dict):
                q.append((d1[k], v))
            else:
                d1[k] = v

    return dict1

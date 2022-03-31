import collections

from box import Box as BaseBox


class Box(BaseBox):
    def merge(self, box2: dict):
        """
        Deep merge two Boxes
        https://stackoverflow.com/a/61708681
        """
        dict1 = self.to_dict()
        dict2 = box2.to_dict()
        q = collections.deque([(dict1, dict2)])
        while len(q) > 0:
            d1, d2 = q.pop()
            for k, v in d2.items():
                if k in d1 and isinstance(d1[k], dict) and isinstance(v, dict):
                    q.append((d1[k], v))
                else:
                    d1[k] = v
        self.update(dict1)

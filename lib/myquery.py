from typing import Tuple


class MyQuery:
    def __init__(self, url, *params: Tuple[str, str]):
        """
        :param params: tuples with format (parameter, value), both of type str
        """
        self.url = url
        self.params = list(params)

    def query(self, param, val):
        self.params.append((param, val))
        return self

    def __str__(self):
        r = self.url
        if len(self.params) != 0:
            r += "?"
            for param in self.params:
                r += str(param[0]) + "=" + str(param[1]) + "&"

        return r

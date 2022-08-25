---
id: 20220818060902-units-in-names
---

When defining a variable that represents some sort of quantity - time, money, distance etc - make sure your variable makes it clear what the unit - seconds, Euros, metres - of that quantity is. You can do this in the name - `timeout_seconds` rather than just `timeout`, or by using a more specific type if your language supports that, for example a `timedelta` rather than an integer.

This also applies to names of things in your APIs, configuration files, function arguments, command-line flags, basically anywhere where ambiguity could arise and cause problems.

### Further Reading

- [Pint](https://pint.readthedocs.io/en/stable/) is a Python library to help with dealing with numbers that have units, and their docs are pretty great about why you might want such a thing.

### Sources

- [Please put units in names](https://ruudvanasseldonk.com/2022/03/20/please-put-units-in-names), and the associated [hacker news thread](https://news.ycombinator.com/item?id=30749134)

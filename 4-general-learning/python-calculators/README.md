# Python Calculators

A collection of command-line Python programs from my general programming practice. Each one focuses on a different skill — input validation, menus, arithmetic, and networking math.

## What's inside

| File | What it does |
|------|--------------|
| `Homework_lesson19.py` | A 3-in-1 menu app: find the max of 3 numbers, check even/odd, and a basic two-number calculator |
| `maximum_calculator_with_additional_octions.py` | Finds the max of 3 numbers, then lets you keep operating on that result (add/subtract/multiply/divide) |
| `subnetting_calculator_mainFunction.py` | Takes an IP address + prefix and calculates the subnet: network, first/last host, broadcast, and next subnet |
| `LICENSE` | Creative Commons Zero v1.0 (public domain) |

## How to run

All three are plain Python 3 scripts:

```bash
python3 Homework_lesson19.py
python3 maximum_calculator_with_additional_octions.py
python3 subnetting_calculator_mainFunction.py
```

The subnetting calculator needs `colorama` for colored output:
```bash
pip install colorama
```

All of them support typing `exit()` at any prompt to quit.

## Highlights

- **Homework_lesson19** — heavy focus on input validation: accepts numbers separated by spaces, commas, dashes, etc.
- **maximum_calculator** — shows how to chain operations on a running result through a menu loop.
- **subnetting_calculator** — the most advanced one: real networking math that handles different prefix ranges (Class A/B/C style) and prints a full subnet breakdown. Useful for cyber security / networking studies.

## What I learned

- Robust input validation and error handling (`try/except`, loops)
- Building menu-driven CLI programs
- Working with dictionaries to map operations
- Subnetting and IP math: prefixes, subnet masks, host ranges, broadcast addresses

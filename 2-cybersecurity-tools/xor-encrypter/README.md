# XOR Encrypter

A study tool from my cyber security coursework. It takes a text payload, obfuscates it using **base64 encoding + XOR with a random key**, and writes out a self-contained Python file that reverses the process at runtime.

> ⚠️ **Educational use only.** This was built to learn how payload obfuscation and XOR encoding work — concepts used in both offensive security training and defensive analysis. Use it only on systems you own or are explicitly authorized to test.

## How it works

1. You paste in a payload (the tool was written with msfvenom `python-reflection` format in mind).
2. The script encodes it to base64.
3. It generates a **random key** the same length as the encoded payload (using Python's `secrets` module).
4. It XORs the encoded payload against that key.
5. It writes a new Python file that contains the XOR'd bytes + key, and reverses the operation when run.

The point of the exercise: the original payload is never stored in plaintext in the output file — it only exists after the XOR + base64 decode happens at runtime.

## How to run

```bash
python3 XOR_encrypter.py
```

Then follow the prompts:
- Paste your payload
- Choose a name for the output file

The script creates that output file in the same folder.

## What I learned

- XOR as a reversible operation (`a ^ b ^ b == a`)
- Generating cryptographically random keys with `secrets`
- base64 encoding/decoding of byte objects
- Building a Python file programmatically with an f-string template

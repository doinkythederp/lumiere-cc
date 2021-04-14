# Eval command

This eval custom command will run javascript and return the value. Set the name to something like "e", as "eval" is a built-in owner-only command.

## Format:
```
(cmd) <code> [//flag, ...]
```

## Flags:
- `//json` - JSON-ify the output

- `//keys` - Show the keys of the output object

- `//allkeys` - Show the (hidden) keys of the output object

- `//values` - Show the values of the output object

- `//allvalues` - Show the (hidden) values of the output object

- `//entries` - Show the entries of the output object

- `//allentries` - Show the (hidden) entries of the output object
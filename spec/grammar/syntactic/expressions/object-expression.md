# Object Expression

An object expression creates a new object with the given properties.

## Structure

```grammar
EmptyObject = '{}'
FilledObject = '{' Newline Indent Declaration+ Newline Outdent '}'
ObjectExpr = EmptyObject | FilledObject
```

## Example

```syntek
{}

{
	x = 5
}

{
	Number y = 10

	function getValue() returns Number
		return 5

	function printString(String string)
		print(string)
}
```

## References

- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)

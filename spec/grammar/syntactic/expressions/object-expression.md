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
	var x = 5
}

{
	var y: Number = 10

	function getValue(): Number
		return 5

	function printString(string: String)
		print(string)
}
```

## References

- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)

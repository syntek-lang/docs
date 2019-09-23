# Array Expression

An array expression creates a new array with the given elements.

## Structure

```grammar
Elements = ( Expression ( ',' Expression )* )?
ArrayExpr = '[' Elements ']'
```

## Example

```syntek
[]
[1, 2, 3]
[true, 'hello', getValue(), (10 + 5) * 3]

[
	5
]

[
	1,
	2,
	3
]

[
	true,
	'hello',
	getValue(),
	(10 + 5) * 3
]
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

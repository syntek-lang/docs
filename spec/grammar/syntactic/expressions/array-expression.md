# Array Expression

An array expression creates a new array with the given elements.

## Structure
```grammar
SingleLineElements = ( Expression ( ',' Expression )* )?
SingleLineArray = '[' SingleLineElements ']'

MultiLineElements = Expression ( ',' Newline Expression )*
MultiLineArray = '[' Newline Indent MultiLineElements Newline Outdent ']'

ArrayExpr = SingleLineArray | MultiLineArray
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
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Expression](/spec/grammar/syntactic/expressions/)

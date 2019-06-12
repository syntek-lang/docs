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
- [Newline](/spec/grammar/lexical-grammar.html#newline)
- [Indent](/spec/grammar/lexical-grammar.html#indent)
- [Outdent](/spec/grammar/lexical-grammar.html#outdent)
- [Expression](/spec/grammar/expressions/)

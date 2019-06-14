# Switch Statement

Switch statements provide multi-way execution.

## Structure
```grammar
Block = Indent ( Expression | Declaration | Statement )+ Outdent
Case = 'case' Expression ( ',' Expression )* Newline Block
SwitchStmt = 'switch' Expression Newline Indent Case+ Outdent
```

## Example
```syntek
switch x
	case 5
		print('x is 5')
	case 6
		print('x is 6')
	case 7
		print('x is 7')

switch y
	case 5, 6
		print('y is 5 or 6')
	case get7()
		print('x is 7')
		fallthrough
	case 8
		print('x is 7 or 8')
```

## References
- [Newline](/spec/grammar/lexical-grammar.html#newline)
- [Indent](/spec/grammar/lexical-grammar.html#indent)
- [Outdent](/spec/grammar/lexical-grammar.html#outdent)
- [Declaration](/spec/grammar/declarations/)
- [Expression](/spec/grammar/expressions/)
- [Statement](/spec/grammar/statements/)

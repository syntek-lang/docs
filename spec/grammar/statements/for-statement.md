# For Statement

For statements iterate over an array and repeatedly execute a block.

## Structure
```grammar
Type = Identifier ( '[]' )*
Block = Indent ( Expression | Declaration | Statement )+ Outdent
ForStmt = 'for' Type? Identifier 'in' Expression Newline Block
```

## Example
```syntek
for x in range(0, 10)
	print(x)

for Number y in [1, 2, 3]
	print(y)
```

## References
- [Identifier](/spec/grammar/lexical-grammar.html#identifiers)
- [Newline](/spec/grammar/lexical-grammar.html#newline)
- [Indent](/spec/grammar/lexical-grammar.html#indent)
- [Outdent](/spec/grammar/lexical-grammar.html#outdent)
- [Declaration](/spec/grammar/declarations/)
- [Expression](/spec/grammar/expressions/)
- [Statement](/spec/grammar/statements/)

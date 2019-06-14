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
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

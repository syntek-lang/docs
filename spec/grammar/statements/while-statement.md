# While Statement

While statements repeatedly execute a block until the given condition does not resolve to true.

## Structure
```grammar
Block = Indent ( Expression | Declaration | Statement )+ Outdent
WhileStmt = 'while' Expression Newline Block
```

## Example
```syntek
while true
	print('Running forever!')

while x is less than 10
	x = x * 2
```

## References
- [Newline](/spec/grammar/lexical-grammar.html#newline)
- [Indent](/spec/grammar/lexical-grammar.html#indent)
- [Outdent](/spec/grammar/lexical-grammar.html#outdent)
- [Declaration](/spec/grammar/declarations/)
- [Expression](/spec/grammar/expressions/)
- [Statement](/spec/grammar/statements/)

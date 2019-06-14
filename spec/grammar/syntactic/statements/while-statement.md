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
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

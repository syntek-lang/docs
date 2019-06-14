# Repeat Statement

Repeat statements repeatedly execute a block.

## Structure
```grammar
Block = Indent ( Expression | Declaration | Statement )+ Outdent
RepeatStmt = 'repeat' Expression 'times' Newline Block
```

## Example
```syntek
repeat 10 times
	print('Hello, World!')

repeat x times
	sum = sum + x
```

## References
- [Newline](/spec/grammar/lexical-grammar.html#newline)
- [Indent](/spec/grammar/lexical-grammar.html#indent)
- [Outdent](/spec/grammar/lexical-grammar.html#outdent)
- [Declaration](/spec/grammar/declarations/)
- [Expression](/spec/grammar/expressions/)
- [Statement](/spec/grammar/statements/)

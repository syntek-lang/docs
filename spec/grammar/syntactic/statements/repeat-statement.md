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
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

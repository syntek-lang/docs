# Repeat Statement

Repeat statements repeatedly execute a block.

## Structure

```grammar
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

- [Block](/spec/grammar/syntactic/#block)
- [Newline](/spec/grammar/lexical.html#newline)
- [Expression](/spec/grammar/syntactic/expressions/)

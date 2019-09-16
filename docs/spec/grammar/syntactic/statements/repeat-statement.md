# Repeat Statement

Repeat statements repeatedly execute a block.

The expression is evaluated once at the start of the repeat statement. The expression must resolve to a number.

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

# While Statement

While statements repeatedly execute a block until the given condition does not resolve to true.

## Structure

```grammar
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

- [Block](/spec/grammar/syntactic/#block)
- [Newline](/spec/grammar/lexical.html#newline)
- [Expression](/spec/grammar/syntactic/expressions/)

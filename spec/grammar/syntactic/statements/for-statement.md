# For Statement

For statements iterate over an array and repeatedly execute a block.

## Structure
```grammar
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
- [Type](/spec/grammar/syntactic/#type)
- [Block](/spec/grammar/syntactic/#block)
- [Newline](/spec/grammar/lexical.html#newline)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Expression](/spec/grammar/syntactic/expressions/)
# If Statement

If statements control the execution of code through a condition.

## Structure
```grammar
IfStmt = 'if' Expression Newline Block ElseStmt?
ElseStmt = 'else' ( IfStmt | ( Newline Block ) )
```

## Example
```syntek
if x is 5
	print('x is 5')

if time < 18
	print('Good day')
else
	print('Good evening')

if time < 10
	print('Good morning')
else if time < 18
	print('Good day')
else
	print('Good evening')
```

## References
- [Block](/spec/grammar/syntactic/#block)
- [Newline](/spec/grammar/lexical.html#newline)
- [Expression](/spec/grammar/syntactic/expressions/)

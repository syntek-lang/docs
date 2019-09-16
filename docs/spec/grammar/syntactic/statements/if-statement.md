# If Statement

If statements control the execution of code through a condition.

If the expression evaluates to true the if branch is executed, otherwise the else branch is executed when present. The else keyword can be followed with another if, also known as an `else if`.

If the expression does not resolve to a boolean an error must be thrown.

## Structure

```grammar
IfStmt = 'if' Expression Newline Block ElseStmt?
ElseStmt = 'else' ( IfStmt | ( Newline Block ) )
```

## Example

```syntek
if x is less than 5
	print('x is 5')

if time is less than 18
	print('Good day')
else
	print('Good evening')

if time is less than 10
	print('Good morning')
else if time is less than 18
	print('Good day')
else
	print('Good evening')
```

## References

- [Block](/spec/grammar/syntactic/#block)
- [Newline](/spec/grammar/lexical.html#newline)
- [Expression](/spec/grammar/syntactic/expressions/)

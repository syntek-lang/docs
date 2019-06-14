# If Statement

If statements control the execution of code through a condition.

## Structure
```grammar
Block = Indent ( Expression | Declaration | Statement )+ Outdent
IfStmt = 'if' Expression Newline Block ( 'else' ( IfStmt | ( Newline Block ) ) )?
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
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

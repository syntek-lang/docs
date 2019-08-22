# Try Statement

Try statements execute a block of code. If the code in try block throws an exception the execution will be stopped and the catch block will be executed. The program will not be terminated if an exception is thrown inside the try block.

## Structure

```grammar
ErrorVariable = Identifier ( ':' Type )?

TryStmt = 'try' Newline Block CatchStmt
CatchStmt = 'catch' ErrorVariable? Newline Block
```

## Example

```syntek
try
	fetch('https://syntek.dev')
catch
	print('An error occurred')

try
	throw 5
catch num
	print(num)

try
	throw new Error('An error')
catch error: Error
	print(error)
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Block](/spec/grammar/syntactic/#block)
- [Newline](/spec/grammar/lexical.html#newline)
- [Identifier](/spec/grammar/lexical.html#identifiers)

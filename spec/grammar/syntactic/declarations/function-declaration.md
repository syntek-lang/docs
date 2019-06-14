# Function Declaration

A function declaration stores a function under an identifier. The identifier can be used to call the function.

## Structure
```grammar
Block = Indent ( Expression | Declaration | Statement )+ Outdent

Type = Identifier ( '[]' )*
Param = Type? Identifier
ParamList = '(' ( Param ( ',' Param )* )? ')'
ReturnValue = 'returns' Type
FuncDecl = 'function' Identifier ParamList ReturnValue? Newline Block
```

## Example
```syntek
function main()
	print('Hello, World!')

function add(a, b)
	return a + b

function multiply(Number a, Number b)
	return a * b

function pow(a, b) returns Number
	return a ^ b

function printNumbers(Number[] numbers)
	for num in numbers
		print(num)
```

## References
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

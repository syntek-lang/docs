# Function Declaration

A function declaration stores a function under an identifier. The identifier can be used to call the function.

## Structure
```grammar
FuncDecl = FuncSig Block
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
- [Block](/spec/grammar/syntactic/#block)
- [Function Signature](/spec/grammar/syntactic/#function-signature)

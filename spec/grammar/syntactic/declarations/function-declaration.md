# Function Declaration

A function declaration stores a function under an identifier. The identifier can be used to execute the function.

A function can optionally specify the types of it's parameters and it's return value. If a function is called with the wrong types an error will be thrown. If a function specifies it's return type but returns a wrong type an error will also be thrown.

The `return` keyword can be used to stop execution of the function and optionally return a value to the function caller. If the function does not use `return` it will implicitely return `null`.

A function can be overloaded by providing a different number of parameters as the other function declarations. If you have a function with 2 parameters, you can declare a function with 3 parameters and the same name. If you want to be able to call a function with a string and a number you must omit the type or use `any` as the type.

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

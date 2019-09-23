# Function Declaration

A function declaration stores a function under an identifier. The identifier can be used to execute the function.

If parameter types and/or the return type is not explicitely provided it will be inferred from the usage.

The `return` keyword can be used to stop execution of the function and optionally return a value to the function caller. If the function does not use `return` it will implicitely return `void`.

A function can be overloaded by providing a different number of parameters as the other function declarations. If you have a function with 2 parameters, you can declare a function with 3 parameters and the same name.

## Structure

```grammar
FuncDecl = FuncSig Block
```

## Example

```syntek
function main() {
	print('Hello, World!')
}

function main(): void {
	print('Hello, World!')
}

function add(a, b) {
	return a + b
}

function multiply(a: Number, b: Number) {
	return a * b
}

function pow(a, b): Number {
	return a ^ b
}

function printNumbers(numbers: Number[]) {
	for num in numbers {
		print(num)
	}
}

function identity(x) {
	return x
}

function <T> identity(x: T): T {
	return x
}
```

## References

- [Block](/spec/grammar/syntactic/#block)
- [Function Signature](/spec/grammar/syntactic/#function-signature)

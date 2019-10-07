# Function Declaration

A function declaration stores a function under an identifier. The identifier can be used to execute the function.

If a function omits the return type it will return void.

The `return` keyword can be used to stop execution of the function and optionally return a value to the function caller.

Functions can be overloaded, as long as the parameters are different.

## Structure

```grammar
FuncDecl = FuncSig Block
```

## Example

```syntek
function main() {
  print('Hello, World!')
}

function printNumbers(numbers: Number[]) {
  for num in numbers {
    print(num)
  }
}

function add(a: Number, b: Number): Number {
  return a + b
}

function <T> identity(x: T): T {
  return x
}
```

## References

- [Block](/spec/grammar/syntactic/#block)
- [Function Signature](/spec/grammar/syntactic/#function-signature)

## Note

Initially it was the idea to have type inference based on the usage of a variable. This would allow a function to omit all types, while still being typed.

```syntek
function add(a, b) {
  return a + b
}
```

This is however no longer allowed.

# Scopes

There are 3 different scopes in Syntek that define where a variable can be accessed from.

[[toc]]

## File Scope

Variables declared outside of a function, class, and block are in file scope. Variables in file scope are accessible in the entire file.

```syntek
var x = 5
print(x) # x is accessible here
```

Variables declared in file scope, excluding imports, are automatically exported.

## Block Scope

When a variable is declared in one of the following statements, it is in a block scope:

- If
- Switch
- For
- Repeat
- While

Variables inside block scope are accessible in the block and nested blocks, but not outside of the block.

```syntek
if true
	var x = 10
	print(x) # x is accessible here

	if true
		print(x) # x is accessible here

print(x) # x is not accessible here
```

## Function Scope

Variables declared at the root of a function are inside function scope. These variables are available inside the entire function, but not outside of it.

`x` is declared inside the function `main`, which makes it available inside the function. `x` is not accessible outside the function `main`.

```syntek
function main()
	var x = 5
	print(x) # x is accessible here

main()
print(x) # x is not accessible here
```

If `x` is declared outside the function scope it will reassign that variable. Shadowing variables is not possible.

```syntek
var x = 5

function main()
	x = 10
	print(x) # prints 10

main()
print(x) # prints 10
```

## Class Scope

Variables declared inside a class are only accessible through the class.

```syntek
class MyClass
	static var x = 5

print(x) # x is not accessible
```

A class scope has a static and instance scope. You can use the same name in both the static and instance scope.

```syntek
class MyClass
	static var x = 5
	var x = 10
```

You are able to declare a variable in a class regardless of whether it's already used outside of the class.

```syntek
var x = 5

class MyClass
	static var x = 10
	var x = 15

print(x) # prints 5
```

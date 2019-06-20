# Scopes

There are 3 different scopes in Syntek that define where a variable can be accessed from.

[[toc]]

## File Scope

Variables declared outside of a function, class, and interface are file scope. Variables that are in file scope are accessible in the entire file.

Variables declared inside an if, loop, or switch statement take the closest available scope. In the following example this means that x is declared in the file scope of the program and is accessible outside of the if statement.

```syntek
if true
	x = 5

print(x) # x is accessible here
```

Variables declared in the file scope, excluding imports, are automatically exported.

## Function Scope

Variables declared inside a function are inside function scope. These variables are available inside the entire function, but not outside of it.

`x` is declared inside the function `main`, which makes it available inside the function. `x` is not accessible outside the function `main`.

```syntek
function main()
	x = 5
	print(x) # x is accessible here

main()
print(x) # x is not accessible here
```

When you declare a variable inside an if, loop, or switch statement inside a function it takes the closest scope, which would be the function scope.

```syntek
function main()
	if true
		x = 5
	print(x) # x is accessible here

main()
print(x) # x is not accessible here
```

If `x` is declared outside the function scope it will reassign that variable. Shadowing variables is not possible.

```syntek
x = 5

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
	static x = 5

print(x) # x is not accessible
```

A class scope has a static and instance scope. You can use the same name in both the static and instance scope.

```syntek
class MyClass
	static x = 5
	x = 10
```

You are able to declare a variable in a class regardless of whether it's already used outside of the class.

```syntek
x = 5

class MyClass
	static x = 10
	x = 15

print(x) # prints 5
```

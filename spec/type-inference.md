# Type Inference

Syntek has strong type inference capabilities. Due to the strict nature of operators and statements types can easily be inferred. This chapter outlines the type inference that can be done at compile time if no types are provided.

## Binary and Unary Expressions

```syntek
# a and b must be a number, boolean, or null.
# x is a boolean.
x = a is b
x = a is not b

# a and b must be a number.
# x is a boolean.
x = a is less than b
x = a is greater than b

# a and b must be a number.
# x is a number.
x = a + b
x = a - b
x = a * b
x = a / b
x = a % b
x = a ^ b

# a and b must be a boolean.
# x is a boolean.
x = a and b
x = a or b

# a must be a number.
# x is a number.
x = +a
x = -a

# a must be a boolean.
# x is a boolean.
x = not a
```

## Index Expression

```syntek
# a must be an array, b must be a number.
# x is any.
x = a[b]
```

## If Statement

```syntek
# a and b must be a boolean.
if a
else if b
```

## Switch Statement

```syntek
# a must be a number, boolean, string, or null.
switch a

# a must be a number, boolean, string, or null.
case a
```

## Loops

```syntek
# a must be an array.
# x is any.
for x in a

# a must be a number.
repeat a times

# a must be a boolean.
while a
```

## Example

In the following code no explicit types are provided. Despite this, all types can be inferred.

```syntek
function multiply(a, b)
	# sum is a number, because 0 is a number.
	sum = 0

	# b must be number.
	repeat b times

		# a must be a number, because it's used in an arithmetic binary expression.
		# sum stays a number, because 'sum + a' gives a number.
		sum = sum + a

	# sum is returned, which is a number, so multiply returns a number.
	return sum
```

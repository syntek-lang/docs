# Type Inference

Syntek has strong type inference capabilities. Due to the strict nature of operators and statements types can easily be inferred. This chapter outlines the type inference that can be done at compile time if no types are provided.

## Binary and Unary Expressions

```syntek
# a and b must be a number, or boolean.
# x is a boolean.
var x = a == b
var x = a != b

# a and b must be a number.
# x is a boolean.
var x = a < b
var x = a > b
var x = a >= b
var x = a <= b

# a and b must be a number.
# x is a number.
var x = a + b
var x = a - b
var x = a * b
var x = a / b
var x = a % b
var x = a ^ b

# a and b must be a boolean.
# x is a boolean.
var x = a and b
var x = a or b

# a must be a number.
# x is a number.
var x = -a

# a must be a boolean.
# x is a boolean.
var x = not a
```

## Index Expression

```syntek
# a must be an Array<T>, b must be a number.
# x is T.
var x = a[b]
```

## Async Expression

```syntek
# a is T.
# x is Promise<T>.
var x = async a
```

## If Expression

```syntek
# a and b must be a boolean.
if a
else if b
```

## Switch Statement

```syntek
# a must be a number, boolean, or string.
switch a

# a must be a number, boolean, or string.
case a
```

## Loops

```syntek
# a must be an Array<T>.
# x is T.
for x in a

# a must be a boolean.
while a
```

## Functions

```syntek
# T -> T
function identity(x) {
  return x
}

var x = identity(5) # Number
var y = identity(true) # Boolean
```

```syntek
# Number -> Number
function add5(x) {
  return x + 5
}

var x = add5(10) # Number
var y = add5(true) # Error
```

## Example

In the following code no explicit types are provided. Despite this, all types can be inferred.

```syntek
function multiply(a, b) {
  # sum is a number, because 0 is a number.
  var sum = 0

  # b must be number.
  for _ in range(b) {

    # a must be a number, because it's used in an arithmetic binary expression.
    sum = sum + a
  }

  # sum is returned, which is a number, so multiply returns a number.
  return sum
}
```

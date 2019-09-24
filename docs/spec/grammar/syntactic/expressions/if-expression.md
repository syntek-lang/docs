# If Expression

An if expression control the execution of code through a condition.

If the condition evaluates to true the if branch is executed, otherwise the else branch is executed when present. The else keyword can be followed with another if, also known as an `else if`.

If expressions can be used to assign a value to a variable using `yield`, similar to a ternary operator. In this case, the if expression must contain an else branch, and all branches need to `yield` a value.

## Structure

```grammar
IfExpr = 'if' Expression Block ElseExpr?
ElseExpr = 'else' ( IfExpr | Block )
```

## Example

```syntek
if x < 5 {
  print('x is 5')
}

if time < 18 {
  print('Good day')
} else {
  print('Good evening')
}

if time < 10 {
  print('Good morning')
} else if time < 18 {
  print('Good day')
} else {
  print('Good evening')
}

var x = if true { yield 5 } else { yield 10 }

var y = if x == 5 {
  print('x is 5')
  yield x - 1
} else if x == 10 {
  print('x is 10')
  yield x - 2
} else {
  print(x)
  yield x - 3
}
```

## References

- [Block](/spec/grammar/syntactic/#block)
- [Expression](/spec/grammar/syntactic/expressions/)

# Assignment Expression

An assignment expression is used to reassign a variable.

Even though an assignment expression is an expression, it may not be combined with other expressions.

## Structure

```grammar
AssignmentExpr = Expression '=' Expression
```

## Example

```syntek
x = 5
array[0] = 10
obj.value = 15
obj.prop.value = [1, 2, 3]
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

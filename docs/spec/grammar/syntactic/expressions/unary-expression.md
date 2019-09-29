# Unary Expression

A unary expression is an operation with only one operand. There are 3 types of unary expressions:

- Negation
- Not

The right hand side of negation must always be a number. The right hand side of not must always be a boolean.

## Structure

```grammar
UnaryOp = '-' | '!'
UnaryExpr = UnaryOp Expression
```

## Example

```syntek
-5
!true
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

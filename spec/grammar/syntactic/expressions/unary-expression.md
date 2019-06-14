# Unary Expression

A unary expression is an operation with only one operand.

## Structure
```grammar
UnaryOp = '+' | '-' | 'not'
UnaryExpr = UnaryOp Expression
```

## Example
```syntek
-5
+(5 * -5)
not true
```

## References
- [Expression](/spec/grammar/syntactic/expressions/)

# Binary Expression

A binary expression is an operation with a left- and right-hand argument. There are 3 types of binary expressions:

- Comparison
- Arithmetic
- Logical

The left- and right-hand side of `is` and `is not` must be a number, boolean, or null. The left- and right-hand side of `is less than` and `is greater than` must be a number.

The left- and right-hand side of an arithmetic binary expression must be a number.

The left- and right-hand side of a logical binary expression must be a boolean.

The logical operators short-circuit. If the left-hand side of `and` is false, the right hand side is not evaluated. If the left-hand side of `or` is true, the right hand side is not evaluated.

## Structure

```grammar
ComparisonOp = 'is' | 'is not' | 'is less than' | 'is greater than'
ArithmeticOp = '+' | '-' | '*' | '/' | '%' | '^'
LogicalOp = 'and' | 'or'

BinaryOp = ComparisonOp | ArithmeticOp | LogicalOp
BinaryExpr = Expression BinaryOp Expression
```

## Example

```syntek
5 + 10
true or false
61 is less than 162
(2 * 3) is 6
true and fn()
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

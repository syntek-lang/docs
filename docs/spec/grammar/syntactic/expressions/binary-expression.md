# Binary Expression

A binary expression is an operation with a left- and right-hand argument. There are 3 types of binary expressions:

- Comparison
- Arithmetic
- Logical

The left- and right-hand side of `==` and `!=` must be a number or boolean. The left- and right-hand side of `<` and `>` must be a number.

The left- and right-hand side of an arithmetic binary expression must be a number.

The left- and right-hand side of a logical binary expression must be a boolean.

The logical operators short-circuit. If the left-hand side of `and` is false, the right hand side is not evaluated. If the left-hand side of `or` is true, the right hand side is not evaluated.

## Structure

```grammar
ComparisonOp = '==' | '!=' | '<' | '>'
ArithmeticOp = '+' | '-' | '*' | '/' | '%' | '^'
LogicalOp = 'and' | 'or'

BinaryOp = ComparisonOp | ArithmeticOp | LogicalOp
BinaryExpr = Expression BinaryOp Expression
```

## Example

```syntek
5 + 10
true or false
61 < 162
(2 * 3) == 6
true and fn()
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

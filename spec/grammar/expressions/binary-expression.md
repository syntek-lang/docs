# Binary Expression

A binary expression is an operation with a left-hand and right-hand argument.

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
- [Expression](/spec/grammar/expressions/)

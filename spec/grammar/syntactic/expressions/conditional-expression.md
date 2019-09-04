# Conditional Expression

A conditional expression returns a value dependent on the condition. If the condition is true the first expression is returned, otherwise the second.

If statements have higher precedence than conditional expressions.

## Structure

```grammar
ConditionalExpr = 'if' Expression 'then' Expression 'else' Expression
```

## Example

```syntek
var x = if true then 5 else 10
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

# Assignment Expression

An assignment expression changes a variable on a given object.

Even though an assignment expression is an expression, it may not be combined with other expressions.

## Structure

```grammar
AssignmentExpr = MemberExpression '=' Expression
```

## Example

```syntek
obj.value = 10
obj.prop.value = [1, 2, 3]
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)
- [Member Expression](/spec/grammar/syntactic/expressions/member-expression.html)

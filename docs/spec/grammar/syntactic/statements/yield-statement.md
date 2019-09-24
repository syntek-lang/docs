# Yield Statement

A yield statement is used to return a value from an expression. Similar to `return`, as code below `yield` will not be executed.

Yield can be used in the following expressions:

- [If Expression](/spec/grammar/syntactic/expressions/if-expression.html)

## Structure

```grammar
YieldStmt = 'yield' Expression
```

## Example

```syntek
yield 5
yield x
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

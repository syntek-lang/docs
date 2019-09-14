# Async Expression

Async expressions can be used to not implicitely await. It wraps the value in `Promise` and returns it immediately.

## Structure

```grammar
AsyncExpr = 'async' Expression
```

## Example

```syntek
async asyncFunction()
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

# Async Expression

An async expression skips awaiting for a promise to resolve.

## Structure

```grammar
AsyncExpr = 'async' Expression
```

## Example

```syntek
async asyncFunction()
async new Promise()
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

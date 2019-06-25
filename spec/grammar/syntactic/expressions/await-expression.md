# Await Expression

An await expression waits for a promise to complete, returning the value of the promise when it's done. You can only use `await` inside functions declared as async. Awaiting anything other than a promise will throw an error.

## Structure

```grammar
AwaitExpr = 'await' Expression
```

## Example

```syntek
await asyncFunction()
await new Promise()
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

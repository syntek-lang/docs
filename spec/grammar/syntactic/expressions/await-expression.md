# Await Expression

An await expression waits for a suspension to complete, returning the value of the suspension when it's done. You can only use `await` inside functions declared as async. Awaiting anything other than a suspension will throw an error.

## Structure

```grammar
AwaitExpr = 'await' Expression
```

## Example

```syntek
await asyncFunction()
await new Suspension(5)
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

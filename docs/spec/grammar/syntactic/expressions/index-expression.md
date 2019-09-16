# Index Expression

An index expression retrieves the given index from the identifier. The parameter of an index expression must resolve to a number.

## Structure

```grammar
IndexExpr = Expression '[' Expression? ']'
```

## Example

```syntek
array[0]
array[(10 + 5) / 3]
getArray()[getIndex()]
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

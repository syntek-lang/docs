# Call Expression

A call expression invokes the given identifier as a function.

## Structure

```grammar
ParamList = '(' ( Expression ( ',' Expression )* )? ')'
CallExpr = Expression GenericArgs? '(' ParamList? ')'
```

## Example

```syntek
start()
padLeft('Hello', 5, ' ')
print(getValue())
max((5 + 3) * 2, 9) + min(5, getValue())
identity<Number>(5)
createPair<Number, String>(5, 'Hello')
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)
- [Generic Arguments](/spec/grammar/syntactic/#generic-arguments)

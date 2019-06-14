# Call Expression

A call expression invokes the given identifier as a function.

## Structure
```grammar
ParamList = '(' ( Expression ( ',' Expression )* )? ')'
CallExpr = Expression '(' ParamList? ')'
```

## Example
```syntek
start()
padLeft('Hello', 5, ' ')
print(getValue())
max((5 + 3) * 2, 9) + min(5, getValue())
```

## References
- [Expression](/spec/grammar/syntactic/expressions/)

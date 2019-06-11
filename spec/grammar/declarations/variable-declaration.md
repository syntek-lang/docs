# Variable Declaration

A variable declaration stores a value under the given identifier. The identifier can be used to retrieve the value.

## Structure
```grammar
Type = Identifier ( '[]' )*
VarDecl = Type? Identifier '=' Expression Newline
```

## Example
```syntek
x = 5
Number y = 5
Number[] numbers = [1, 2, 3]
Number[][] matrix = [[1, 2], [3, 4]]
```

## References
- [Identifier](/spec/grammar/lexical-grammar.html#identifiers)

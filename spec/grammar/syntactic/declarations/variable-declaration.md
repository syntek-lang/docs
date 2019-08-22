# Variable Declaration

A variable declaration stores a value under the given identifier. The identifier can be used to retrieve the value.

If a variable does not explicitely provide a type, the type will be inferred by it's usage.

All variables are non-final and may be reassigned.

## Structure

```grammar
VarDecl = 'var' Identifier ( ':' Type )? '=' Expression Newline
```

## Example

```syntek
var x = 5
var y: Number = 5
var numbers: Number[] = [1, 2, 3]
var matrix: Number[][] = [[1, 2], [3, 4]]
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Newline](/spec/grammar/lexical.html#newline)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Expression](/spec/grammar/syntactic/expressions/)

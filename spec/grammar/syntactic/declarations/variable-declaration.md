# Variable Declaration

A variable declaration stores a value under the given identifier. The identifier can be used to retrieve the value.

If a variable is declared with `var` the type will be inferred by it's usage.

All variables are non-final and may be reassigned. Reassignments may not include `var` or a type.

## Structure

```grammar
VarDecl = ( 'var' | Type ) Identifier '=' Expression Newline
```

## Example

```syntek
var x = 5
Number y = 5
Number[] numbers = [1, 2, 3]
Number[][] matrix = [[1, 2], [3, 4]]
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Newline](/spec/grammar/lexical.html#newline)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Expression](/spec/grammar/syntactic/expressions/)

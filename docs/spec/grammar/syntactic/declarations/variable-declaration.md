# Variable Declaration

A variable declaration stores a value under the given identifier. The identifier can be used to retrieve the value.

A variable can also be declared without a value, but it can't be used until it is assigned a value.

If a variable does not explicitely provide a type, the type will be inferred.

All variables are non-final and may be reassigned.

## Structure

```grammar
EmptyVarDecl = 'var' Identifier ':' Type
VarDecl = 'var' Identifier ( ':' Type )? '=' Expression
```

## Example

```syntek
# EmptyVarDecl
var x: Number
var y: Number[]
var z: Number[][]

# VarDecl
var x = 5
var y: Number = 5
var numbers: Number[] = [1, 2, 3]
var matrix: Number[][] = [[1, 2], [3, 4]]
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Expression](/spec/grammar/syntactic/expressions/)

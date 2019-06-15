# Variable Declaration

A variable declaration stores a value under the given identifier. The identifier can be used to retrieve the value.

A variable can optionally be typed, by putting a type in front of the identifier. If a variable specifies a type but is assigned with a different type a runtime error will be thrown. `null` is the only value that can be assigned to all variables regardless of their type.

All variables are non-final and may be reassigned. When including a type when reassigning a variable an error will be thrown.

Alternatively a variable can be declared on a member expression. This will change the variable on the given object.

## Structure

```grammar
VarDecl = ( ( Type? Identifier ) | MemberExpression ) '=' Expression Newline
```

## Example

```syntek
x = 5
Number y = 5
Number[] numbers = [1, 2, 3]
Number[][] matrix = [[1, 2], [3, 4]]

obj.value = 10
obj.prop.value = [1, 2, 3]
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Newline](/spec/grammar/lexical.html#newline)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Member Expression](/spec/grammar/syntactic/expressions/member-expression.html)

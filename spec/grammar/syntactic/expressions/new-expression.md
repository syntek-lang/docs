# New Expression

A new expression creates an instance of the given class.

## Structure
```grammar
Class = Identifier ( '.' Identifier )*
ParamList = '(' ( Expression ( ',' Expression )* )? ')'
NewExpr = 'new' Class ParamList
```

## Example
```syntek
new Table()
new Desk('oak')
new furniture.Bed('soft', 2)
new furniture.chairs.WoodenChair()
```

## References
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Expression](/spec/grammar/syntactic/expressions/)

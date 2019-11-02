# New Expression

A new expression creates an instance of the given class.

## Structure

```grammar
ParamList = '(' ( Expression ( ',' Expression )* )? ')'
NewExpr = 'new' VarLoc GenericArgs? ParamList
```

## Example

```syntek
new Table()
new Desk('oak')
new furniture.Bed('soft', 2)
new furniture.chairs.WoodenChair()
new furniture.chairs.Chair<Wood>()
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)
- [Variable Location](/spec/grammar/syntactic/#variable-location)
- [Generic Arguments](/spec/grammar/syntactic/#generic-arguments)

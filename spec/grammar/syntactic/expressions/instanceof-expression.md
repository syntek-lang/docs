# Instanceof Expression

An instanceof expression checks if the left-hand side of the expression is an instance of the right-hand side. The right hand-side of the expression must be an object.

## Structure

```grammar
InstanceofExpr = Expression 'instanceof' Expression
```

## Example

```syntek
5 instanceof Object
[1, 2, 3] instanceof Array
new Dog() instanceof Dog
new GoldFish() instanceof Animal
```

## References

- [Expression](/spec/grammar/syntactic/expressions/)

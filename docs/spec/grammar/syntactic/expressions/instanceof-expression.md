# Instanceof Expression

An instanceof expression checks if the expression is an instance of the given type. Syntek automatically casts the checked expression to the given type.

If the generics of the given type can not be inferred, they have to be provided explicitely.

## Structure

```grammar
InstanceofExpr = Expression 'instanceof' Type
```

## Example

```syntek
5 instanceof Object
[1, 2, 3] instanceof Array
new Dog() instanceof Animal

function foo(x: Object) {
  if x instanceof Number {
    print(x + 5)
  }
}
```

```syntek
class Foo<T> {}

class Bar<T, E> extends Foo<T> {
  function get(): E {}
}

function foo(x: Foo<Number>) {
  if x instanceof Bar<Number, String> {
    var y = x.get() # y is inferred as String
  }
}
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Expression](/spec/grammar/syntactic/expressions/)

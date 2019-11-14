# Builtins

This chapter covers builtin functions and classes in Syntek. The functions and classes are available in any file and do not need to be declared or imported.

## print

```syntek
function print(obj: Object)
```

`print` outputs a string to console, stdout, or another target. The `toString` method is called on `obj` before printing it.

## range

```syntek
# Sequence of numbers from 0 (inclusive) to "end" (exclusive)
function range(end: Number): Number[]

# Sequence of numbers from "start" (inclusive) to "end" (exclusive)
function range(start: Number, end: Number): Number[]

# Sequence of numbers from "start" (inclusive) to "end" (exclusive)
# with steps of "step"
function range(start: Number, end: Number, step: Number): Number[]
```

`range` returns an array of numbers. `range` can be called in 3 different ways. `start` is inclusive and `end` is exclusive. `end` must be greater than `start` and `step` must be greater than 0.

```syntek
range(3) # [0, 1, 2]
range(7) # [0, 1, 2, 3, 4, 5, 6]

range(-5, 0) # [-5, -4, -3, -2, -1]
range(2, 7) # [2, 3, 4, 5, 6]

range(0, 10, 2) # [0, 2, 4, 6, 8]
range(5, 6, 3) # [5]
```

## Object

The `Object` class is the starting point for classes in Syntek. All classes implicitly extend `Object`.

```syntek
class Object
```

## Number

```syntek
class Number
```

## String

```syntek
class String
```

## Boolean

```syntek
class Boolean
```

## Optional

```syntek
class Optional<T>
```

## Result

```syntek
class Result<T, E extends Error>
```

## Array

```syntek
class Array<T>
```

## Function

The `Function` class has a dynamic amount of generic parameters. The generics are the types of the parameters, with the last generic being the return type of the function.

```syntek
class Function<T1, T2, Tn, TResult>
```

## VoidFunction

The `VoidFunction` class is similar to the `Function` class, but it does not produce a value.

```syntek
class VoidFunction<T1, T2, Tn>
```

## Error

```syntek
class Error
```

## Promise

```syntek
class Promise<T>
```

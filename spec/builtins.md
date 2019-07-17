# Builtins

This chapter covers builtin functions and classes in Syntek. The functions and classes are available in any file and do not need to be declared or imported.

## print

```syntek
function print(any obj) returns null
```

`print` outputs a string to console, stdout, or another target. If `obj` is not a string the `toString` method will be called on it.

## range

```syntek
# Sequence of numbers from 0 (inclusive) to "end" (exclusive)
function range(Number end) returns Number[]

# Sequence of numbers from "start" (inclusive) to "end" (exclusive)
function range(Number start, Number end) returns Number[]

# Sequence of numbers from "start" (inclusive) to "end" (exclusive)
# with steps of "step"
function range(Number start, Number end, Number step) returns Number[]
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

```syntek
class Object
```

The Object class is the starting point for all values in Syntek.

## Number

```syntek
class Number extends Object
```

## String

```syntek
class String extends Object
```

## Boolean

```syntek
class Boolean extends Object
```

## Array

```syntek
class Array extends Object
```

## Function

```syntek
class Function extends Object
```

## Error

```syntek
class Error extends Object
```

## Promise

```syntek
class Promise extends Object
```

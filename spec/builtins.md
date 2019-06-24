# Builtins

This chapter covers builtin functions and classes in Syntek. The functions and classes are available in any file and do not need to be declared or imported.

## Print

```syntek
function print(any obj) returns null
```

`print` outputs a string to console, stdout, or another target. If `obj` is not a string the `toString` method will be called on it.

## Length

```syntek
function length(any obj) returns Number
```

`length` returns the length of a string or array. If `obj` is not a string or array an error will be thrown.

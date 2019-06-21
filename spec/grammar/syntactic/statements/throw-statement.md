# Throw Statement

A throw statement throws a user-defined exception. This will stop further execution of the function. If the exception is thrown inside a try statement, then the catch block will be executed. If there is not try statement the program will be terminated.

## Structure

```grammar
ThrowStmt = 'throw' Expression Newline
```

## Example

```syntek
throw new Error()
throw 5
throw 'This is an error'
```

## References

- [Newline](/spec/grammar/lexical.html#newline)
- [Expression](/spec/grammar/syntactic/expressions/)

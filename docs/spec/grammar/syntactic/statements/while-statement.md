# While Statement

While statements repeatedly execute a block until the given condition does not resolve to true.

The expression of a while statement is evaluated at the start of every iteration. The expression must evaluate to a boolean.

## Structure

```grammar
WhileStmt = 'while' Expression Block
```

## Example

```syntek
while true {
  print('Running forever!')
}

while x is less than 10 {
  x = x * 2
}
```

## References

- [Block](/spec/grammar/syntactic/#block)
- [Expression](/spec/grammar/syntactic/expressions/)

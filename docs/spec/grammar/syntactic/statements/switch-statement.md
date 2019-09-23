# Switch Statement

Switch statements provide multi-way execution. The expression of a switch statement must resolve to a number, boolean, or string.

If a case matches the expression the block is executed. Blocks implicitely break, but breaking explicitely is possible.

You can use `continue` to explicitely fallthrough to the next case block. The condition of the case is not evaluated on fallthrough.

## Structure

```grammar
Case = 'case' Expression ( ',' Expression )* Block
SwitchStmt = 'switch' Expression '{' Case+ '}'
```

## Example

```syntek
switch x {
	case 5 {
		print('x is 5')
	}
	case 6 {
		print('x is 6')
	}
	case 7 {
		print('x is 7')
	}
}

switch y {
	case 5, 6 {
		print('y is 5 or 6')
		break
	}
	case get7() {
		print('x is 7')
		continue
	}
	case 8 {
		print('x is 7 or 8')
	}
}
```

## References

- [Block](/spec/grammar/syntactic/#block)
- [Expression](/spec/grammar/syntactic/expressions/)

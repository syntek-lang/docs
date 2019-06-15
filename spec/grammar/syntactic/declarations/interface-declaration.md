# Interface Declaration

An interface declaration stores an interface under an identifier. The identifier can be used to reference the interface.

An interface body must contain one or more function signatures.

An interface can optionally extend one or more interfaces.

## Structure

```grammar
InterfaceBody = Indent FuncSig+ Outdent
Extends = 'extends' Identifier ( ',' Identifier )*
InterfaceDecl = 'interface' Identifier Extends? Newline InterfaceBody
```

## Example

```syntek
interface Animal
	function move(steps)
	function eat()

interface Pet extends Animal
	function feed(String food)

interface Human
	function getHeight() returns Number
```

## References

- [Function Signature](/spec/grammar/syntactic/#function-signature)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)

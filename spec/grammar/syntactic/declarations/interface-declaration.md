# Interface Declaration

An interface declaration stores an interface under an identifier. The identifier can be used to reference the interface.

## Structure
```grammar
Type = Identifier ( '[]' )*
Param = Type? Identifier
ParamList = '(' ( Param ( ',' Param )* )? ')'
ReturnValue = 'returns' Type

Method = 'function' Identifier ParamList ReturnValue? Newline
Body = Indent Method+ Outdent

Extends = 'extends' Identifier ( ',' Identifier )*
InterfaceDecl = 'interface' Identifier Extends? Newline Body
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
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)

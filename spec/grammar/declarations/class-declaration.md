# Class Declaration

A class declaration stores a class under an identifier. The identifier can be used to create an instance of the class.

## Structure
```grammar
Block = Indent ( 'static'? Declaration )+ Outdent

Extends = 'extends' Identifier
Implements = 'implements' Identifier ( ',' Identifier )*
ClassDecl = 'class' Identifier Extends? Implements? Newline Block
```

## Example
```syntek
class MyClass
	String language = 'Syntek'

	function toString() returns String
		return this.language

class Child extends MyClass
	static Number x = 5
	static Number y = 15

class Dog implements Pet
	function feed()
		print('Feeding the dog')

class Horse implements Animal, Rideable
	function ride()
		print('Riding the horse')

class Goldfish extends Fish implements Pet
	function feed()
		print('Feeding the goldfish')
```

## References
- [Identifier](/spec/grammar/lexical-grammar.html#identifiers)
- [Newline](/spec/grammar/lexical-grammar.html#newline)
- [Indent](/spec/grammar/lexical-grammar.html#indent)
- [Outdent](/spec/grammar/lexical-grammar.html#outdent)
- [Declaration](/spec/grammar/declarations/)

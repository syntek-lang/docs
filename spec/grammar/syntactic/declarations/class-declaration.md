# Class Declaration

A class declaration stores a class under an identifier. The identifier can be used to create an instance of the class. A class can optionally extend one class and implement multiple interfaces.

The class body may only contain variable and function declarations. Declarations can be prefixed with `static` to declare them as static.

When a class is instantiated using the `new` keyword the constructor of the class will be called. The constructor is a function inside the class with the same name as the class. If a class extends another class the super class must be called before being able to access `this`. This can be done by calling `super` and optionally providing arguments. If there is no constructor the constructor of the super class will automatically be called.

`this` is not available inside static functions and when declaring a static variable. A static variable can reference a different static variable by accessing the property through the class name. Inside non-static functions or when declaring a non-static variable different non-statics can be accessed by using `this`.

When a class implements an interface it must implement all functions declared on the interface.

## Structure

```grammar
Block = Indent ( 'static'? Declaration )+ Outdent

Extends = 'extends' VarLoc
Implements = 'implements' VarLoc ( ',' VarLoc )*
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

- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Variable Location](/spec/grammar/syntactic/#variable-location)

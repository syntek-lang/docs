# Class Declaration

A class declaration stores a class under an identifier. The identifier can be used to create an instance of the class. A class can optionally extend multiple class.

The class body may only contain function and variable declarations. Declarations can be prefixed with `static` to declare them as static. Variables don't have to be assigned immediately if it is assigned in the constructor.

When a class is instantiated using the `new` keyword the constructor of the class will be called. The constructor is a function inside the class with the same name as the class. If a class extends another class the super class must be called before being able to access `this`. This can be done by calling `super` and optionally providing arguments. If there is no constructor the constructor of the super class will automatically be called.

`this` is not available inside static functions and when declaring a static variable. A static variable can reference a different static variable by accessing the property through the class name. Inside non-static functions or when declaring a non-static variable different non-statics can be accessed by using `this`.

A class can extend multiple other classes. If there is a naming collision with methods from the classes that are being extended then the class needs to override the method. A naming collision occurs when two methods with the same parameter count or a variable have the same name on the same level of extending.

## Structure

```grammar
EmptyDecl = ( 'var' | Type ) Identifier
ClassProp = 'static'? ( Declaration | EmptyDecl )

ClassBody = Indent ClassProp+ Outdent
Extends = 'extends' VarLoc ( ',' VarLoc )*

ClassDecl = 'class' Identifier GenericParams? Extends? Newline ClassBody
```

## Example

```syntek
class MyClass
	var language = 'Syntek'

	function toString() returns String
		return this.language

class Child extends MyClass
	static Number x = 5
	static Number y = 15

class Horse extends Animal, Rideable
	function ride()
		print('Riding the horse')

class Goldfish extends Fish, Pet
	function feed()
		print('Feeding the goldfish')

class A
	function toString()
		return 'Class A'

class B
	function toString()
		return 'Class B'

class C extends A, B
	function toString() # override because of naming collision
		return A.super.toString() # this calls toString on A

# LinkedList
class Node<T>
	T data
	Optional<Node<T>> next
	Optional<Node<T>> previous

	function Node(T data)
		this.data = data
		this.next = Optional.empty()
		this.previous = Optional.empty()

class LinkedList<T>
	Node<T> head

	function LinkedList()
		this.head = new Node<T>()
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Newline](/spec/grammar/lexical.html#newline)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Variable Location](/spec/grammar/syntactic/#variable-location)
- [Generic Parameters](/spec/grammar/syntactic/#generic-parameters)

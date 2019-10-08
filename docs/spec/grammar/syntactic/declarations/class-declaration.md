# Class Declaration

A class declaration stores a class under an identifier. The identifier can be used to create an instance of the class.

## Regular Class

The class body may only contain function and variable declarations. Declarations can be prefixed with `static` to declare them as static. Variables don't have to be assigned immediately if it is assigned in the constructor.

When a class is instantiated using the `new` keyword the constructor of the class will be called. If a class extends another class the super class must be called before being able to access `this`. This can be done by calling `super` and optionally providing arguments. If there is no constructor the constructor of the super class will automatically be called.

`this` is not available inside static functions and when declaring a static variable. A static variable can reference a different static variable by accessing the property through the class name. Inside non-static functions or when declaring a non-static variable different non-statics can be accessed by using `this`.

A class can extend multiple other classes. If there is a naming collision with methods from the classes that are being extended then the class needs to override the method. A naming collision occurs when two methods with the same parameter count or a variable have the same name on the same level of extending.

## Abstract Class

A class can be made abstract by prefixing it with the `abstract` keyword. An abstract classs can create abstract functions by prefixing the function with `abstract`. If a function is abstract it can not contain a body.

Abstract classes can't be instantiated, but must be extended by a regular class. Functions declared abstract must be implemented in the subclass.

In Syntek a function can be both abstract and static.

## Structure

```grammar
Modifier = 'abstract' | 'static'

ClassProp = Modifier* Declaration
Constructor = 'new' ParamList Block

ClassBody = '{' ( ClassProp | Constructor )* '}'
Extends = 'extends' VarLoc ( ',' VarLoc )*

ClassDecl = 'abstract'? 'class' Identifier GenericParams? Extends? ClassBody
```

## Example

Regular class:

```syntek
class MyClass {
  var language = 'Syntek'

  function toString(): String {
    return this.language
  }
}

class Child extends MyClass {
  static var x: Number = 5
  static var y: Number = 15
}

class Horse extends Animal, Rideable {
  function ride() {
    print('Riding the horse')
  }
}

class Goldfish extends Fish, Pet {
  function feed() {
    print('Feeding the goldfish')
  }
}

class A {
  function toString(): String {
    return 'Class A'
  }
}

class B {
  function toString(): String {
    return 'Class B'
  }
}

class C extends A, B {
  function toString(): String { # override because of naming collision
    return A.super.toString() # this calls toString on A
  }
}

# LinkedList
class Node<T> {
  var data: T
  var next: Optional<Node<T>>
  var previous: Optional<Node<T>>

  new(data: T) {
    this.data = data
    this.next = Optional.empty()
    this.previous = Optional.empty()
  }
}

class LinkedList<T> {
  var head: Node<T>

  new() {
    this.head = new Node<T>()
  }
}
```

Abstract class:

```syntek
abstract class Shape {
  var width: Number
  var height: Number

  new(width: Number, height: Number) {
    this.width = width
    this.height = height
  }

  abstract function display()

  abstract function calculateArea(): Number
}

abstract class Serializable<T> {
  abstract function serialize(): String

  static abstract function deserialize(value: String): T
}
```

## References

- [Type](/spec/grammar/syntactic/#type)
- [Block](/spec/grammar/syntactic/#block)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Parameter List](/spec/grammar/syntactic/#parameter-list)
- [Variable Location](/spec/grammar/syntactic/#variable-location)
- [Generic Parameters](/spec/grammar/syntactic/#generic-parameters)

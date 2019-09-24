# Scopes

There are 3 different scopes in Syntek that define where a variable can be accessed from.

[[toc]]

## Block Scope

When a variable is declared in a block, which is between `{}`, it is in block scope.

Variables inside block scope are accessible in the block and nested blocks, but not outside of the block.

```syntek
if true {
  var x = 10
  print(x) # x is accessible here

  if true {
    print(x) # x is accessible here
  }
}

print(x) # x is not accessible here
```

## File Scope

File scope is similar to block scope, but all variables, excluding imports, are automatically exported. A variable is in file scope when it is at the top level of a file.

```syntek
# math is not exported
import math

# x is exported
var x = 5

# foo is exported
function foo() {
  print('bar')
}
```

## Class Scope

Variables declared inside a class are only accessible through the class.

```syntek
class MyClass {
  static var x = 5
}

print(x) # x is not accessible
```

A class scope has a static and instance scope. You can use the same name in both the static and instance scope.

```syntek
class MyClass {
  static var x = 5
  var x = 10
}
```

You are able to declare a variable in a class regardless of whether it's already used outside of the class.

```syntek
var x = 5

class MyClass {
  static var x = 10
  var x = 15
}

print(x) # prints 5
```

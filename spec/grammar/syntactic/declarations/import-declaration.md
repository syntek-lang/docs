# Import Declaration

An import declaration imports a module and stores it under the given identifier. The identifier can be used to retrieve the module.

There are 2 types of modules. Built-in modules and external modules.

A built-in module can be imported using the modules name after `import`. The name does not have to be in quotes. Optionally the module can be stored under a different name using `as`.

An external module can be imported using the file location. The file location can be a path on the filesystem or a URL. The location must be in quotes and the import must contain a variable name using `as`.

Importing a module will import all variables, functions, classes, and interfaces declared in the module. It will store these under the specified module name, which can be referenced by using a member expression.

## Structure

```grammar
BuiltinImport = 'import' Identifier ( 'as' Identifier )? Newline
ExternalImport = 'import' String 'as' Identifier Newline

ImportDecl = BuiltinImport | ExternalImport
```

## Example

```syntek
import math
import fs as fileSystem

import './foo' as foo
import './bar' as bar
```

## References

- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)
- [String](/spec/grammar/lexical.html#string)

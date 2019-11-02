# Import Declaration

An import declaration imports a module and stores it under the given identifier.

There are 2 types of import. Full and partial import.

Full import imports the an entire module and exposes it under the given name.

Partial import imports given variables from a module and exposes them under the given name.

## Structure

```grammar
Rename = 'as' Identifier
Expose = '.' '{' Identifier Rename? ( ',' Identifier Rename? )* '}'

FullImport = Rename?
PartialImport = Expose

ImportDecl = 'import' VarLoc ( FullImport | PartialImport )
```

## Example

```syntek
import std.math
import std.math as myMath
import std.math.{log, floor as flr}
```

## References

- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Variable Location](/spec/grammar/syntactic/#variable-location)

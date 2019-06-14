# Import Declaration

An import declaration imports a file and stores it under the given identifier. The identifier can be used to retrieve the file.

## Structure
```grammar
ModuleImport = 'import' Identifier ( 'as' Identifier )? Newline
ExternalImport = 'import' String 'as' Identifier Newline

ImportDecl = ModuleImport | ExternalImport
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

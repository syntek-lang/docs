# Lexical Grammar

This chapter describes the lexical grammar of Syntek.

## Whitespace

Whitespace is all the empty space inside a Syntek program, and the tokens that get ignored by the compiler.

### Newline

A newline is indicated by a `LF` or `CRLF` character.

### Comment

A comment starts with `#` and ends on the first newline character. To allow a line to contain a statement and a comment, the newline character is not consumed by the comment.

### Empty lines

Empty lines are lines that do not contain any characters or only consist of whitespace, and are ignored by the compiler.

### Spaces and tabs

Space and tab characters are ignored by the compiler.

## Identifiers

Identifiers are user defined names for entities such as variables and functions. An identifier is a sequence of one or more letters, digits, and underscores. The first character in an identifier must be a letter or underscore.

Keywords and literals cannot be used as identifiers, with the exception of class properties/methods.

```syntek
# valid
a
_0x0
HelloWorld

# invalid
0_
```

## Keywords

The following keywords are reserved and cannot be used as identifiers, with the exception of class properties/methods.

```syntek
class extends new
abstract static
this super instanceof
if else
function return
async
import as
for in while
continue break yield
and or
var
```

## Operators and punctuation

The following characters represent operators and punctuation:

```syntek
# Operators
+ - * / % ^

= ==
! !=
< <=
> >=

# Punctuation
. , [ ] ( ) { } :
```

## Literals

### Number

Number represents any integer and floating point value, stored according to the IEEE 754 standard. There are no explicit `int` and `float` types.

A number is a sequence of one or more digits, optionally followed by a `.` and one or more digits.

`+` and `-` characters in front of a number are not part of the number.

Underscores can be placed between the digits of a number to make it more readable.

```syntek
# valid
0
0.1
150
745.16
82.000001
1_851_619_781_613
7.947_137
1______1

# invalid
5.
.9
_125
612_
```

### String

A string literal consists of zero or more characters enclosed in single quotes. Strings can only span over a single line.

After a backslash, certain single-character escapes represent special values:

- `\'` single quote
- `\\` backslash
- `\n` newline
- `\r` carriage return
- `\t` tab

```syntek
# valid
''
'a'
'hello'
'\t'
'\''
'\\'

# invalid
'\'
```

### Boolean

A boolean can have 2 values. `true` and `false`.

```syntek
true
false
```

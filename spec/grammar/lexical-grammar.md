# Lexical Grammar

This chapter describes the lexical grammar of Syntek.

## Whitespace

Whitespace is all the empty space inside a Syntek program, and the tokens that get ignored by the compiler.

### Newline
A newline is indicated by a `LF` or `CRLF` character.

### Indent
An indent token is added when the current line starts with more tabs than the previous line.

### Outdent
An outdent token is added when the current line starts with less tabs than the previous line.

### Comment
Comments are ignored by the compiler. A comment starts with `#` and ends on the first newline character. To allow a line to contain a statement and a comment, the newline character is not consumed by the comment.

### Empty lines
Empty lines are lines that do not contain any characters or only consist of whitespace. Empty lines are ignored by the compiler and do not add an indent or outdent token.

### Spaces and tabs
Space and tab characters are ignored by the compiler.

## Identifiers

Identifiers are user defined names for entities such as variables and functions. An identifier is a sequence of one or more letters, digits, and underscores. The first character in an identifier must be a letter or underscore.

Keywords and literals cannot be used as identifiers.

```syntek
# valid
a
_0x0
HelloWorld

# invalid
0_
```

## Keywords

The following keywords are reserved and cannot be used as identifiers:
```
class new static this
if else
function return returns
import as
for in repeat times while continue break
and or not
is greater less than
```

## Operators and punctuation

The following characters represent operators and punctuation:
```
+ - * / % ^
. , [ ] ( ) [ ]
=
```

## Literals

### Number
Number represents any integer and floating point value, stored according to the IEEE 754 standard. There are no direct `int` and `float` types.

A number is a sequence of one or more digits, optionally followed by a `.` and one or more digits.

`+` and `-` characters in front of a number are not a part of the number.

Numbers can contain underscores to make them more readable. Underscores are ignored by the compiler.

```syntek
# valid
0
0.1
150
745.16
82.000001

# invalid
5.
.9
```

### String
A string literal consists of zero or more characters enclosed in single quotes. Strings can only span over a single line.

After a backslash, certain single-character escapes represent special values:
- `\'` single quote
- `\\` backslash
- `\b` backspace
- `\f` form feed
- `\n` newline
- `\r` carriage return
- `\t` horizontal tab
- `\v` vertical tab

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

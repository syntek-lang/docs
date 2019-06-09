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
Empty lines are ignored by the compiler. An empty line does not add an indent or outdent token.

### Spaces and tabs
Space and tab characters are ignored by the compiler.

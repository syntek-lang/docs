# Introduction

This chapter describes the syntactic grammar of Syntek. It is split up into [declarations](/spec/grammar/syntactic/declarations/), [expressions](/spec/grammar/syntactic/expressions/), and [statements](/spec/grammar/syntactic/statements/).

Despite being indentation based, parsing is done relatively lax. Whitespace at the right-hand side of declarations, expressions, and statements can often be ignored, because the parser knows what the next token should be for the code to be valid.

## Structure

Each token has it's own page, which contains an introduction with information about the token, the grammar of the token, examples of the token, and links to other tokens that got referenced.

## Grammar Notation

Grammar in this chapter is displayed in a codeblock. The syntax of the grammar blocks only show the possible combinations. Implementations of the grammar may vary.

### Identifiers

Identifiers start with a capital letter. They can be referenced inside assignments to create a token.

The following example declares that `Variable` is a `Type` followed by an `Identifier`:

```grammar
Variable = Type Identifier
```

### Lexical tokens

Lexical tokens are inside single quotes.

The following example declares that `Increment` is an `Identifier` followed by `++`:

```grammar
Increment = Identifier '++'
```

### Or

An or is used to show that the grammar can be one of 2 possibilities. Or is displayed with a `|` character.

The following example declares that `Line` is a `Declaration`, `Expression` or `Statement`:

```grammar
Line = Declaration | Expression | Statement
```

### Quantifiers

Quantifiers are used to denote that something is optional or should occur more than once. The following quantifiers can be used:

- `?` optional
- `*` zero or more
- `+` one or more

### Grouping

A group may be used to describe more complex grammar that involve quantifiers.

The following example declares that `Block` is one or more `Declaration`, `Expression` or `Statement` tokens:

```grammar
Block = ( Declaration | Expression | Statement )+
```

## Global Grammar

This chapter needs to reuse a lot of tokens. The most common tokens are listed on this page. These tokens are building blocks for other tokens and don't have much meaning on their own.

### Variable Location

```grammar
VarLoc = ( Identifier | MemberExpression )
```

- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Member Expression](/spec/grammar/syntactic/expressions/member-expression.html)

### Type

```grammar
Type = ( VarLoc | 'any' | 'null' ) '[]'*
```

- [Variable Location](/spec/grammar/syntactic/#variable-location)

### Block

```grammar
Block = Indent ( Declaration | Expression | Statement )+ Outdent
```

- [Indent](/spec/grammar/lexical.html#indent)
- [Outdent](/spec/grammar/lexical.html#outdent)
- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

### Function Signature

```grammar
Param = Type? Identifier
ParamList = '(' ( Param ( ',' Param )* )? ')'
ReturnValue = 'returns' Type

FuncSig = 'function' Identifier ParamList ReturnValue? Newline
```

- [Type](/spec/grammar/syntactic/#type)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Newline](/spec/grammar/lexical.html#newline)

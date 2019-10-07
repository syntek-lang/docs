# Introduction

This chapter describes the syntactic grammar of Syntek. It is split up into [declarations](/spec/grammar/syntactic/declarations/), [expressions](/spec/grammar/syntactic/expressions/), and [statements](/spec/grammar/syntactic/statements/).

## Structure

Each token has it's own page, which contains an introduction with information about the token, the grammar of the token, examples of the token, and links to other tokens that got referenced.

## Grammar Notation

Grammar in this chapter is displayed in a codeblock. The syntax of the grammar blocks only show the possible combinations. Implementations of the grammar may vary.

### Identifiers

The following example declares that `Foo` is `Bar` followed by `Baz`:

```grammar
Foo = Bar Baz
```

### Lexical tokens

```grammar
'var'
```

### Or

```grammar
A | B
```

### Quantifiers

- `?` optional
- `*` zero or more
- `+` one or more

### Grouping

```grammar
( A B )
```

## Global Grammar

This chapter needs to reuse a lot of tokens. The most common tokens are listed on this page. These tokens are building blocks for other tokens and don't have much meaning on their own.

### Variable Location

```grammar
VarLoc = Identifier ( '.' Identifier )*
```

```syntek
Number
a.b
x.y.z
```

- [Identifier](/spec/grammar/lexical.html#identifiers)

### Generic Parameters

```grammar
GenericParams = '<' Identifier ( ',' Identifier )* '>'
```

```syntek
<T>
<T1, T2>
<A, B, C>
```

- [Identifier](/spec/grammar/lexical.html#identifiers)

### Generic Arguments

```grammar
GenericArgs = '<' Type ( ',' Type )* '>'
```

```syntek
<Number>
<Number, Number>
<x.y>
<a.b, x.y>
<Array<Number>>
<Array<Number>, Array<Number>>
```

- [Type](/spec/grammar/syntactic/#type)

### Type

```grammar
Type = VarLoc GenericArgs? '[]'*
```

```syntek
Number
Number[]
Number[][]
x.y
x.y[]
x.y[][]
Array<Number>
Array<Optional<Number>>
Array<Optional<Number>>[]
```

- [Variable Location](/spec/grammar/syntactic/#variable-location)
- [Generic Arguments](/spec/grammar/syntactic/#generic-arguments)

### Block

```grammar
Block = '{' ( Declaration | Expression | Statement )+ '}'
```

- [Declaration](/spec/grammar/syntactic/declarations/)
- [Expression](/spec/grammar/syntactic/expressions/)
- [Statement](/spec/grammar/syntactic/statements/)

### Parameter List

```grammar
Param = Identifier ':' Type
ParamList = '(' ( Param ( ',' Param )* )? ')'
```

- [Type](/spec/grammar/syntactic/#type)
- [Identifier](/spec/grammar/lexical.html#identifiers)

### Function Signature

```grammar
FuncSig = 'function' GenericParams? Identifier ParamList ( ':' Type )?
```

More info: [Function Declaration](/spec/grammar/syntactic/declarations/function-declaration.html)

- [Type](/spec/grammar/syntactic/#type)
- [Identifier](/spec/grammar/lexical.html#identifiers)
- [Parameter List](/spec/grammar/syntactic/#parameter-list)
- [Generic Parameters](/spec/grammar/syntactic/#generic-parameters)

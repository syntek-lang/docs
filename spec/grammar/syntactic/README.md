# Introduction

This chapter describes the syntactic grammar of Syntek.

## Grammar Notation

Grammar in this chapter is displayed in a codeblock. The syntax of the grammar blocks only show the possible combinations. Implementations of the grammar may vary.

### Identifiers
Identifiers start with a capital letter. They can be referenced inside assignments to create a rule.

The following example declares that `Variable` is a `Type` followed by an `Identifier`:
```grammar
Variable = Type Identifier
```

### Literals
Literals are used to show operators or keywords.

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

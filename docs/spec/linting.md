# Linting

::: warning
This chapter is not complete. The exact rules the linter includes will be added later.
:::

The Syntek compiler has a builtin linter. The linter does semantic analysis, reports on coding conventions, and reports on code quality.

The linter can report errors and warnings. Errors stop execution of the program.

Similar to [ESLint](https://eslint.org/) the linter can be extended. Native modules can add extra rules to report on code in a certain environment.

## Linting Module

A linting module adds extra linting rules to the compiler. Every linting rule includes metadata and functions to check the AST.

### Metadata

The metadata of a rule provides information on what it is used for.

#### name

The name of the rule. This should be the same as the file name.

#### description

The description of the rule, describing what it does.

#### category

The category the rule belongs in.

## Rules

Soon:tm:

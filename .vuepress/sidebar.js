module.exports = {
  '/guide/': [
    {
      title: 'Guide',
      children: [
        '/guide/',
        '/guide/variables',
        '/guide/operators',
        '/guide/loops',
        '/guide/conditional_statements',
        '/guide/functions',
        '/guide/classes',
        '/guide/imports',
        '/guide/typings',
        '/guide/api',
      ],
    },
  ],
  '/spec/': [
    '/spec/',
    '/spec/grammar/lexical-grammar',
    {
      title: 'Declarations',
      children: [
        '/spec/grammar/declarations/',
        '/spec/grammar/declarations/variable-declaration',
        '/spec/grammar/declarations/function-declaration',
        '/spec/grammar/declarations/class-declaration',
        '/spec/grammar/declarations/import-declaration',
      ],
    },
    {
      title: 'Expressions',
      children: [
        '/spec/grammar/expressions/',
        '/spec/grammar/expressions/unary-expression',
        '/spec/grammar/expressions/binary-expression',
        '/spec/grammar/expressions/logical-expression',
        '/spec/grammar/expressions/call-expression',
        '/spec/grammar/expressions/index-expression',
        '/spec/grammar/expressions/member-expression',
        '/spec/grammar/expressions/new-expression',
        '/spec/grammar/expressions/array-expression',
        '/spec/grammar/expressions/object-expression',
      ],
    },
    {
      title: 'Statements',
      children: [
        '/spec/grammar/statements/',
        '/spec/grammar/statements/expression-statement',
        '/spec/grammar/statements/if-statement',
        '/spec/grammar/statements/switch-statement',
        '/spec/grammar/statements/for-statement',
        '/spec/grammar/statements/repeat-statement',
        '/spec/grammar/statements/while-statement',
        '/spec/grammar/statements/return-statement',
      ],
    },
  ],
};

for (const group of Object.values(module.exports)) {
  for (const section of group) {
    if (!section.collapsable) {
      section.collapsable = false;
    }
  }
}

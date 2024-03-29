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
    {
      title: 'Grammar',
      collapsable: false,
      children: [
        '/spec/grammar/lexical',
        {
          title: 'Syntactic Grammar',
          children: [
            '/spec/grammar/syntactic/',
            {
              title: 'Declarations',
              collapsable: false,
              children: [
                '/spec/grammar/syntactic/declarations/',
                '/spec/grammar/syntactic/declarations/variable-declaration',
                '/spec/grammar/syntactic/declarations/function-declaration',
                '/spec/grammar/syntactic/declarations/class-declaration',
                '/spec/grammar/syntactic/declarations/import-declaration',
              ],
            },
            {
              title: 'Expressions',
              collapsable: false,
              children: [
                '/spec/grammar/syntactic/expressions/',
                '/spec/grammar/syntactic/expressions/assignment-expression',
                '/spec/grammar/syntactic/expressions/wrapped-expression',
                '/spec/grammar/syntactic/expressions/unary-expression',
                '/spec/grammar/syntactic/expressions/binary-expression',
                '/spec/grammar/syntactic/expressions/call-expression',
                '/spec/grammar/syntactic/expressions/index-expression',
                '/spec/grammar/syntactic/expressions/member-expression',
                '/spec/grammar/syntactic/expressions/new-expression',
                '/spec/grammar/syntactic/expressions/instanceof-expression',
                '/spec/grammar/syntactic/expressions/async-expression',
                '/spec/grammar/syntactic/expressions/array-expression',
                '/spec/grammar/syntactic/expressions/if-expression',
              ],
            },
            {
              title: 'Statements',
              collapsable: false,
              children: [
                '/spec/grammar/syntactic/statements/',
                '/spec/grammar/syntactic/statements/for-statement',
                '/spec/grammar/syntactic/statements/while-statement',
                '/spec/grammar/syntactic/statements/return-statement',
                '/spec/grammar/syntactic/statements/yield-statement',
              ],
            },
          ],
        },
      ],
    },
    '/spec/scopes',
    '/spec/operator-precedence',
    '/spec/builtins',
    '/spec/modules',
    '/spec/linting',
    '/spec/i18n',
  ],
};

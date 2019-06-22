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
                '/spec/grammar/syntactic/expressions/wrapped-expression',
                '/spec/grammar/syntactic/expressions/unary-expression',
                '/spec/grammar/syntactic/expressions/binary-expression',
                '/spec/grammar/syntactic/expressions/call-expression',
                '/spec/grammar/syntactic/expressions/index-expression',
                '/spec/grammar/syntactic/expressions/member-expression',
                '/spec/grammar/syntactic/expressions/new-expression',
                '/spec/grammar/syntactic/expressions/await-expression',
                '/spec/grammar/syntactic/expressions/array-expression',
                '/spec/grammar/syntactic/expressions/object-expression',
              ],
            },
            {
              title: 'Statements',
              collapsable: false,
              children: [
                '/spec/grammar/syntactic/statements/',
                '/spec/grammar/syntactic/statements/if-statement',
                '/spec/grammar/syntactic/statements/switch-statement',
                '/spec/grammar/syntactic/statements/for-statement',
                '/spec/grammar/syntactic/statements/repeat-statement',
                '/spec/grammar/syntactic/statements/while-statement',
                '/spec/grammar/syntactic/statements/try-statement',
                '/spec/grammar/syntactic/statements/throw-statement',
                '/spec/grammar/syntactic/statements/return-statement',
              ],
            },
          ],
        },
      ],
    },
    '/spec/scopes',
    '/spec/modules',
    '/spec/linting',
  ],
};

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
  ],
};

for (const group of Object.values(module.exports)) {
  for (const section of group) {
    if (!section.collapsable) {
      section.collapsable = false;
    }
  }
}

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
    {
      title: 'Specification',
      children: [
        '/spec/',
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

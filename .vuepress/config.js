module.exports = {
  title: 'Syntek',
  description: 'A beginner friendly programming language',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Site', link: 'https://syntek.dev/' },
      { text: 'GitHub', link: 'https://github.com/syntek-lang' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'variables',
        'operators',
        'loops',
        'conditional_statements',
        'functions',
        'classes',
        'imports',
        'typings',
        'api',
      ],
    },
    displayAllHeaders: true,
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/pwa',
  ],
};

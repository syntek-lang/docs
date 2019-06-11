const sidebar = require('./sidebar.js');
const prismSyntek = require('./highlight/prism-syntek.js');
const prismGrammar = require('./highlight/prism-grammar.js');

const TITLE = 'Syntek Documentation';
const DESCRIPTION = 'Documentation of the Syntek programming language';

module.exports = {
  markdown: {
    extendMarkdown() {
      // Load Syntek and grammar highlighting mode
      prismSyntek(this.Prism);
      prismGrammar(this.Prism);
    },
  },

  title: TITLE,
  description: DESCRIPTION,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#389d70' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'og:title', content: TITLE }],
    ['meta', { name: 'og:description', content: DESCRIPTION }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://docs.syntek.dev/' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
  ],

  themeConfig: {
    logo: '/images/logo.png',
    repo: 'syntek-lang/docs',
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Specification', link: '/spec/' },
      { text: 'Site', link: 'https://syntek.dev/' },
    ],

    sidebar,
  },

  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true,
    }],
  ],
};

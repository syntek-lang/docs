module.exports = {
  extends: [
    '@syntek/syntek/node',
    '@syntek/syntek/markdown',
  ],
  // TODO: Move overrides to @syntek/eslint-config-syntek
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};

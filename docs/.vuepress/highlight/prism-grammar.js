module.exports = (prism) => {
  // eslint-disable-next-line no-param-reassign
  prism.languages.grammar = {
    comment: /#.*/,

    string: {
      pattern: /'(?:[^'\\]|\\.)*'/,
      greedy: true,
    },

    keyword: {
      pattern: /\b[A-Z]\w*(?= =)/,
      greedy: true,
    },

    'class-name': /\b[A-Z]\w*/,
    operator: /[+*?]/,
    punctuation: /[()|]/,
  };
};

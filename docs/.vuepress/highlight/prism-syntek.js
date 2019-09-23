module.exports = (prism) => {
  function wordsToRegex(keywords) {
    return new RegExp(`\\b(?:${keywords.join('|')})\\b`);
  }

  // eslint-disable-next-line no-param-reassign
  prism.languages.syntek = {
    comment: /#.*/,
    string: /'(?:[^'\\]|\\.)*'/,

    builtin: wordsToRegex([
      'print',
      'range',
    ]),

    keyword: wordsToRegex([
      'class', 'new', 'static', 'this', 'super', 'extends', 'instanceof',
      'if', 'then', 'else',
      'switch', 'case',
      'function', 'return', 'void',
      'async',
      'import', 'as',
      'for', 'in', 'repeat', 'times', 'while', 'continue', 'break',
      'and', 'or', 'not',
      'is', 'greater', 'less', 'than',
      'var',
    ]),

    'class-name': /\b[A-Z]\w*/,
    function: /[a-zA-Z_]\w*(?=\s*(?:\(|<))/,

    property: {
      pattern: /(\.)[a-zA-Z_]\w*(?!\s*\()/,
      lookbehind: true,
    },

    boolean: /\b(?:true|false)\b/,
    number: /\b\d(?:[_\d])*(?:\.\d(?:[_\d])*)?/,
    operator: /[+\-*/%^=]/,
    punctuation: /[.,[\](){}<>:]/,
  };
};

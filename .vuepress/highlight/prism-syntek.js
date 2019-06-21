module.exports = (prism) => {
  function keywordsToRegex(keywords) {
    return new RegExp(`\\b(?:${keywords.join('|')})\\b`);
  }

  // eslint-disable-next-line no-param-reassign
  prism.languages.syntek = {
    comment: /#.*/,

    string: {
      pattern: /'(?:[^'\\]|\\.)*'/,
      greedy: true,
    },

    builtin: {
      pattern: /\b(?:print)\b/,
      greedy: true,
    },

    'class-name': {
      pattern: /\b[A-Z]\w*/,
      greedy: true,
    },

    function: {
      pattern: /[a-zA-Z_]\w*(?=\s*\()/,
      greedy: true,
    },

    keyword: keywordsToRegex([
      'class', 'new', 'static', 'this', 'super', 'extends',
      'if', 'else',
      'switch', 'case', 'fallthrough',
      'function', 'return', 'returns',
      'try', 'catch', 'throw',
      'import', 'as',
      'for', 'in', 'repeat', 'times', 'while', 'continue', 'break',
      'and', 'or', 'not',
      'is', 'greater', 'less', 'than',
      'any', 'null',
    ]),

    property: {
      pattern: /(\.)[a-zA-Z_]\w*(?!\s*\()/,
      lookbehind: true,
    },

    boolean: /\b(?:true|false)\b/,
    number: /\b\d(?:[_\d])*(?:\.\d(?:[_\d])*)?/,
    operator: /[+\-*/%^=]/,
    punctuation: /[.,[\](){}]/,
  };
};

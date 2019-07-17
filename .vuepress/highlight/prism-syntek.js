module.exports = (prism) => {
  function wordsToRegex(keywords) {
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
      pattern: wordsToRegex([
        'print',
        'range',
      ]),
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

    keyword: wordsToRegex([
      'class', 'new', 'static', 'this', 'super', 'extends', 'instanceof',
      'if', 'else',
      'switch', 'case', 'fallthrough',
      'function', 'return', 'returns',
      'async',
      'try', 'catch', 'throw',
      'import', 'as',
      'for', 'in', 'repeat', 'times', 'while', 'continue', 'break',
      'and', 'or', 'not',
      'is', 'greater', 'less', 'than',
      'any',

      'null',
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

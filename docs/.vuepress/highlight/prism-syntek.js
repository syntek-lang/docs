module.exports = (prism) => {
  function prepareRegex(array) {
    return array
      .sort((a, b) => b.length - a.length)
      .map(regex => regex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|');
  }

  const charsToRegex = chars => new RegExp(`(?:${prepareRegex(chars)})`);
  const wordsToRegex = keywords => new RegExp(`\\b(?:${prepareRegex(keywords)})\\b`);

  // eslint-disable-next-line no-param-reassign
  prism.languages.syntek = {
    comment: /#.*/,
    string: /'(?:[^'\\]|\\.)*'/,

    builtin: wordsToRegex([
      'print',
      'range',
    ]),

    keyword: wordsToRegex([
      'class', 'extends', 'new',
      'abstract', 'static',
      'this', 'super', 'instanceof',
      'if', 'else',
      'switch', 'case',
      'function', 'return',
      'async',
      'import', 'as',
      'for', 'in', 'while',
      'continue', 'break', 'yield',
      'and', 'or',
      'var',
    ]),

    'class-name': /\b[A-Z]\w*/,
    function: /[a-zA-Z_]\w*(?=\s*(?:\())/,

    property: {
      pattern: /(\.)[a-zA-Z_]\w*(?!\s*\()/,
      lookbehind: true,
    },

    boolean: /\b(?:true|false)\b/,
    number: /\b\d(?:[_\d])*(?:\.\d(?:[_\d])*)?/,
    operator: charsToRegex([
      '+', '-', '*', '/', '%', '^',

      '=', '==',
      '!', '!=',
      '<', '<=',
      '>', '>=',
    ]),
    punctuation: charsToRegex('. , [ ] ( ) { } :'.split(' ')),
  };
};

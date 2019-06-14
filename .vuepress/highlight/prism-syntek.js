module.exports = (prism) => {
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

    property: {
      pattern: /(\.)[a-zA-Z_]\w*(?!\s*\()/,
      lookbehind: true,
    },

    keyword: /\b(?:class|new|static|this|extends|interface|implements|if|else|switch|case|fallthrough|function|return|returns|import|as|for|in|repeat|times|while|continue|break|and|or|not|is|greater|less|than)\b/,
    boolean: /\b(?:true|false)\b/,
    number: /\b\d(?:[_\d])*(?:\.\d(?:[_\d])*)?/,
    operator: /[+\-*/%^=]/,
    punctuation: /[.,[\](){}]/,
  };
};

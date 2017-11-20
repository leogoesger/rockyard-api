module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  globals: {
    factory: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      modules: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      2,
      {trailingComma: "es5", singleQuote: true, bracketSpacing: false},
    ],
    "array-bracket-spacing": 2,
    "array-callback-return": 2,
    "arrow-body-style": 0,
    "arrow-parens": [0, "as-needed"],
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs", {allowSingleLine: false}],
    camelcase: 0,
    "class-methods-use-this": 0,
    "comma-dangle": [
      2,
      {
        objects: "always-multiline",
        arrays: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "comma-spacing": 2,
    "comma-style": 2,
    complexity: 1,
    "computed-property-spacing": 2,
    "consistent-return": 0,
    "consistent-this": [2, "self"],
    "constructor-super": 2,
    curly: 1,
    "dot-location": [2, "property"],
    "dot-notation": [2, {allowPattern: "^[a-z]+(_[a-z]+)+$"}],
    eqeqeq: [2, "smart"],
    "func-call-spacing": 2,
    "func-names": 2,
    "func-style": [2, "declaration", {allowArrowFunctions: true}],
    "generator-star-spacing": 2,
    "global-require": 2,
    "guard-for-in": 2,
    "id-blacklist": 0,
    indent: [2, 2, {SwitchCase: 1}],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "line-comment-position": 1,
    "linebreak-style": 2,
    "lines-around-comment": [
      0,
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
      },
    ],
    "max-lines": 0,
    "max-nested-callbacks": [0, {max: 3}],
    "max-statements-per-line": 2,
    "multiline-ternary": 0,
    "new-cap": 2,
    "new-parens": 2,
    "newline-per-chained-call": 0,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-confusing-arrow": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": [0, {includeExports: true}],
    "no-else-return": 2,
    "no-empty-function": 0,
    "no-empty-pattern": 2,
    "no-empty": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 2,
    "no-implicit-globals": 0,
    "no-implied-eval": 2,
    "no-inner-declarations": 0,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-operators": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, {max: 1}],
    "no-native-reassign": 2,
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-process-env": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": [2, "always"],
    "no-self-assign": [2, {props: true}],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-spaced-func": 2,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 0,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-underscore-dangle": 0,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": [2, {defaultAssignment: false}],
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [2, {varsIgnorePattern: "^_", argsIgnorePattern: "^_"}],
    "no-use-before-define": [
      2,
      {classes: false, functions: false, variables: false},
    ],
    "no-useless-computed-key": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-useless-rename": 2,
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": 1,
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-newline": 0,
    "object-curly-spacing": 2,
    "object-property-newline": 0,
    "object-shorthand": 2,
    "one-var-declaration-per-line": 2,
    "one-var": 0,
    "operator-linebreak": 0,
    "padded-blocks": [2, "never"],
    "prefer-arrow-callback": 2,
    "prefer-const": [2, {destructuring: "all"}],
    "prefer-numeric-literals": 2,
    "prefer-reflect": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 0,
    "quote-props": [2, "consistent-as-needed"],
    quotes: [2, "single", {avoidEscape: true}],
    radix: 2,
    "require-yield": 2,
    "rest-spread-spacing": 2,
    "semi-spacing": 2,
    semi: 2,
    "sort-imports": 0,
    "sort-keys": 0,
    "space-before-blocks": 2,
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": [2, {words: true, nonwords: false}],
    "symbol-description": 2,
    "template-curly-spacing": 2,
    "valid-typeof": [2, {requireStringLiterals: true}],
    "vars-on-top": 2,
    "wrap-iife": 2,
    "wrap-regex": 2,
    yoda: 2,
  },
};

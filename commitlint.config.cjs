module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [0],
    'subject-case': [0, 'never'],
  },
}

// module.exports = {
//   // ignores: [(commit) => commit.includes('init')],
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [2, 'always',['feat','fix']],
//     'body-leading-blank': [2, 'always'],
//     'footer-leading-blank': [1, 'always'],
//     'header-max-length': [2, 'always', 108],
//     'subject-empty': [2, 'never'],
//     'type-empty': [0],
//     'subject-case': [0, 'never'],
//   },
// }
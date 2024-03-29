// Use to generate an up to date @typescript-eslint adapted standardjs,
// which makes use of all extended rules https://typescript-eslint.io/rules/#extension-rules
// Similar to https://github.com/typescript-eslint/typescript-eslint/blob/f4016c24f9023e8a42def9501b68c4a908cbfede/packages/eslint-plugin/src/configs/recommended.ts

const { rules } = require('@typescript-eslint/eslint-plugin')
const standard = require('eslint-config-standard')

const deepCopy = typeof structuredClone === 'function' ? structuredClone : x => JSON.parse(JSON.stringify(x))

const neededChanges = {}
const newChanges = {}

for (const ruleId in rules) {
  const ruleDefinition = rules[ruleId]
  if (ruleDefinition.meta.docs.extendsBaseRule) {
    if (standard.rules[ruleId]) {
      neededChanges[ruleId] = 'off'
      if (ruleId !== 'dot-notation') {
        newChanges['@typescript-eslint/' + ruleId] = standard.rules[ruleId]
      }
    }
  }
}

const config = deepCopy({
  extends: ['standard', 'standard-jsx'],
  rules: {
    ...neededChanges,
    ...newChanges
  }
})

module.exports = config

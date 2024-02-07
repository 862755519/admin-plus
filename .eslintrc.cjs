/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-v-for-template-key': 'off'
  },
  overrides: [
    {
      files: ['index.vue'],
      rules: {
        "vue/multi-word-component-names": "off",
      }
    }
  ]
}

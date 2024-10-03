## Eslint config 

1. `npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

2. Create a file called `.eslintrc.js`

3. Paste the following code:
```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
  ],
};
```
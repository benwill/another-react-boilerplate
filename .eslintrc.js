module.exports = {
  extends: "airbnb",
  env: {
    mocha: true,
    es6: true
  },
  parser: "babel-eslint",
  rules: {
    // Two spaces for tabs
    "semi": [2, "never"],
    // Prefer not to use dangling comma's
    "comma-dangle": [2, "never"],
    // TODO: When we can unit test stateless functions : https://github.com/facebook/react/issues/4972
    "react/prefer-stateless-function": 0,
    // Increase max length slightly
    'max-len': [2, 120, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }]
  }
};
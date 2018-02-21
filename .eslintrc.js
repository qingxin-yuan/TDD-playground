module.exports = {
  extends: 'airbnb',
  env: {
    jest: true,
  },
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    "array-callback-return": 1
  },
};

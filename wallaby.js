module.exports = function() {
  return {
    files: ['src/**/*.js', '!src/**/__tests__/*.js'],
    tests: ['src/**/__tests__/*.js'],
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  };
};

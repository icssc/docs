// @ts-check

/**
 * @type {import('lint-staged').Config}
 */
const config = {
  "*.?(c|m){js,ts}?(x)": ["eslint --quiet --fix", "prettier --write"],
  "*.{css,json,md?(x),yaml,yml}": ["prettier --write"],
};

module.exports = config;

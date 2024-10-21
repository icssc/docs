// @ts-check

/**
 * @type {import('lint-staged').Config}
 */
const config = {
  "*.?(c|m){js,ts}?(x)": ["biome lint --write .", "biome format --write ."],
  "*.{css,json,md?(x),yaml,yml}": ["biome format --write ."],
};

module.exports = config;

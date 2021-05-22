const postcssPresetEnv = require('postcss-preset-env');
const postcsseasings = require('postcss-easings');
const postcssPow = require('postcss-pow');

module.exports = {
  plugins: [
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'custom-properties': false,
        'place-properties': false,
        'focus-visible-pseudo-class': false,
        'focus-iwithin-pseudo-class': false,
      },
    }),
    postcssPow(),
  ],
};

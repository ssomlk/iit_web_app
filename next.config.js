const nextTranslate = require('next-translate');

module.exports = {
  distDir: 'build',
  images: {
    domains: [],
  },
  env: {},
  ...nextTranslate(),
};

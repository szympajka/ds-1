const withTM = require('next-transpile-modules')(['@szympajka/ds']);

const config = {
  reactStrictMode: true,
}

module.exports = withTM(config);
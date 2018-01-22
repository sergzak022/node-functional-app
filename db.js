const knex = require('knex');
const knexfile = require('./knexfile.js');
const { isProduction } = require('./src/utils/env');

module.exports = knex(
  isProduction()
    ? knexfile.production
    : knexfile.development
);

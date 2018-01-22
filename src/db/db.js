const knex = require('knex');
const knexConfig = require('knexfile.js');

module.exports = knex(
  env === 'production'
    ? knexfile.production
    : knexfile.development
);

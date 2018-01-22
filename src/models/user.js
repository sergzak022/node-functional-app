const knex = require('../db/db');

const TABLE_NAME = 'users';

exports.TABLE_NAME = TABLE_NAME;

exports.getUsers = () => {
  return knex(TABLE_NAME)
    .select('email');
};

exports.getUserById = ( id ) => {
  return knex(TABLE_NAME)
    .select('email')
    .where({id});
};

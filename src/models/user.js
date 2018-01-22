const knex = require('../db/db');

const TABLE_NAME = 'users';

export.TABLE_NAME = TABLE_NAME;

exports.getUsers = () => {

};

exports.getUserById = ( id ) => {
  return knex(TABLE_NAME)
    .select('email')
    .where({id});
};

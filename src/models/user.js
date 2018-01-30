const knex = require('../../db');
const S = require('sanctuary');

const TABLE_NAME = 'users';

exports.TABLE_NAME = TABLE_NAME;

module.exports = {
  getUsers,
  getUserById,
  hasValidUserProps
};


function getUsers() {
  return knex(TABLE_NAME)
    .select('email');
}

function getUserById( id ) {
  return knex(TABLE_NAME)
    .select('email')
    .where({id});
}

function hasValidUserProps( {email, password} ) {
  return S.is(String, email)
    && email.length > 0
    && S.is(String, password)
    && password.length > 0;
}

function createUser( props ) {
}

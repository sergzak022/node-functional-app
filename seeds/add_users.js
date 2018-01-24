var S = require('sanctuary');
var { getUsers } = require('../src/utils/seed');
const {TABLE_NAME} = require('../src/models/user');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert(getUsers(10));
    });
};

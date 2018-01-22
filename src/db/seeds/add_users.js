var S = require('sanctuary');
var { getUsers } = require('../utils/users');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert(getUsers(10));
    });
};

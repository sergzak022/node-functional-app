const {TABLE_NAME} = require('../../models/user');

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists(TABLE_NAME, ( usersTable ) => {
    usersTable.increments();
    usersTable.timestamps(true, true);
    usersTable.string('email');
    usersTable.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', ( usersTable ) => {
    usersTable.increments();
    usersTable.timestamps();
    usersTable.string('email');
    usersTable.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

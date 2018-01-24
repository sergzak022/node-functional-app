// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    debug: false
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'pellefant.db.elephantsql.com',
      user: 'gefpukbc',
      password: '2buhtxc0YtZYjtPrNXyLt72b0tyDgdWn',
      database: 'gefpukbc'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'pellefant.db.elephantsql.com',
      user: 'gefpukbc',
      password: '2buhtxc0YtZYjtPrNXyLt72b0tyDgdWn',
      database: 'gefpukbc'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

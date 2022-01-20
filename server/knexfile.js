require('dotenv').config();

export const development = {
  client: 'postgresql',
  connection: {
    host: process.env.PGHOST || '127.0.0.1',
    user: process.env.PGUSER || 'postgres',
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    options: {
      encrypt: true
    }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migration'
  }
};

export const production = {
  client: 'postgresql',
  connection: {
    host: process.env.PGHOST || '127.0.0.1',
    user: process.env.PGUSER || 'postgres',
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    options: {
      encrypt: true
    }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migration'
  }
};

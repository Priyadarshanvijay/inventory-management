import knexClient from 'knex';
import { DB } from '../db.js';
import { Items } from './items.js';
import { Categories } from './categories.js';
import { Stock } from './stock.js';
import { Companies } from './companies.js';

const db = knexClient({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT, 10),
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD
  },
  pool: { min: 0, max: 7 }
});

export class Knex extends DB {
  constructor() {
    super({
      items: new Items({ db }),
      categories: new Categories({ db }),
      stock: new Stock({ db }),
      companies: new Companies({ db })
    });
  }
}

export default Knex;

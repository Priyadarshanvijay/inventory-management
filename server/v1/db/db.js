// Abstract class / interface declaration file
import { Items } from './items.js';
import { Stock } from './stock.js';
import { Companies } from './companies.js';
import { Categories } from './categories.js';

export class DB {
  get Items() {
    return this.items;
  }

  get Stock() {
    return this.stock;
  }

  get Companies() {
    return this.companies;
  }

  get Categories() {
    return this.categories;
  }

  constructor({
    items = new Items(),
    stock = new Stock(),
    companies = new Companies(),
    categories = new Categories()
  } = {}) {
    if (this.constructor === DB) {
      throw new Error(
        `Abstract class ${this.constructor.name} cannot be instantiated`
      );
    }
    this.items = items;
    this.stock = stock;
    this.companies = companies;
    this.categories = categories;
  }
}

export default DB;

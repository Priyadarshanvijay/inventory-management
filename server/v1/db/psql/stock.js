import { Stock as BaseStock } from '../stock.js';

export class Stock extends BaseStock {
  deleteOneById(id) {
    return this.db(this.name).where({ id }).del();
  }

  insertStock({
    itemId, incomingQuantity, supplierId, manufacturerId
  }) {
    return this.db(this.name).insert({
      item_id: itemId,
      incoming_quantity: incomingQuantity,
      current_quantity: incomingQuantity,
      supplier_id: supplierId,
      manufacturer_id: manufacturerId,
      supply_date: new Date()
    }, ['id']);
  }

  incrementById({
    id,
    incrementBy = 0
  }) {
    if (!id) throw Error('Undefined ID supplied to DB Update function');
    return this.db(this.name)
      .where({ id })
      // So that any item quantity doesn't goes below 0
      .andWhere('current_quantity', '>', (-1 - incrementBy))
      .update({
        current_quantity: this.db.raw(`current_quantity + ${incrementBy}`)
      }, ['current_quantity'])
      .then((res) => (res && res[0] && res[0].current_quantity));
  }

  setStockOverDate({
    id, overDate = new Date()
  }) {
    if (!id) throw Error('Undefined ID supplied to DB Update function');
    return this.db(this.name)
      .where({ id })
      // So that any item with quantity more than 0 isn't set incorrectly
      .andWhere('current_quantity', '<=', 0)
      .update({
        stock_over_date: overDate
      }, ['stock_over_date']);
  }

  constructor({ db }) {
    super();
    this.name = 'stock';
    this.db = db;
  }
}
export default Stock;

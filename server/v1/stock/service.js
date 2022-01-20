import { DB } from '../db/db.js';

export default class StockService {
  constructor({
    db = new DB()
  }) {
    this.db = db;
  }

  async updateStock({
    id, incrementBy
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Stock.incrementById({
      id, incrementBy
    });
    if (result === 0) {
      this.db.Stock.setStockOverDate({ id, overDate: new Date() }).catch();
    }
    return result;
  }

  async insertStock({
    itemId, incomingQuantity = 1, supplierId, manufacturerId
  }) {
    return this.db.Stock.insertStock({
      itemId, incomingQuantity, supplierId, manufacturerId
    });
  }

  async deleteStock({
    id
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Stock.deleteOneById(id);
    return result;
  }
}

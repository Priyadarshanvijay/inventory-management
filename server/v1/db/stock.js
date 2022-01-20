// Abstract class / interface declaration file
export class Stock {
  constructor() {
    if (this.constructor === Stock) {
      throw new Error(
        `Abstract class ${this.constructor.name} cannot be instantiated`
      );
    }
  }

  deleteOneById(id) {
    throw new Error(
      `Method not Declared yet, input: ${id}, class: ${this.constructor.name}`
    );
  }

  insertStock({
    itemId, incomingQuantity, supplierId, manufacturerId
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${itemId}, ${incomingQuantity}, \
      ${supplierId}, ${manufacturerId}, class: ${this.constructor.name}`
    );
  }

  incrementById({
    id,
    incrementBy = 0
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${id}, ${incrementBy}, class: ${this.constructor.name}`
    );
  }

  setStockOverDate({
    id, overDate = new Date()
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${id}, ${overDate}, class: ${this.constructor.name}`
    );
  }
}

export default Stock;

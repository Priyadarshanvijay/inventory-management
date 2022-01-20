// Abstract class / interface declaration file
export class Items {
  constructor() {
    if (this.constructor === Items) {
      throw new Error(
        `Abstract class ${this.constructor.name} cannot be instantiated`
      );
    }
  }

  findOneById(id) {
    throw new Error(
      `Method not Declared yet, input: ${id}, class: ${this.constructor.name}`
    );
  }

  findAll(limit = 10, offset = 0) {
    throw new Error(
      `Method not Declared yet, \
      input: ${limit}, ${offset}, class: ${this.constructor.name}`
    );
  }

  deleteOneById(id) {
    throw new Error(
      `Method not Declared yet, input: ${id}, class: ${this.constructor.name}`
    );
  }

  updateById({
    id,
    itemName = undefined,
    image = undefined,
    categoryId = undefined
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${id}, ${itemName}, ${image}, ${categoryId}\
      , class: ${this.constructor.name}`
    );
  }
}

export default Items;

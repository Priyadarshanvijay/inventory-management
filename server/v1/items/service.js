import { DB } from '../db/db.js';

export default class ItemsService {
  constructor({
    db = new DB()
  }) {
    this.db = db;
  }

  async getItems({
    limit = 10, page = 1
  }) {
    const offset = +limit * (+page - 1);
    const result = await this.db.Items.findAll(limit, offset);
    return result;
    // if (result.stacks.length === 0) {
    //   return { message: 'No goal found' };
    // }

    // return {
    //   pagination: {
    //     isList: Array.isArray(result.stacks),
    //     pageSize: limit,
    //     pageNumber: page,
    //     totalPages: Math.ceil(result.total[0].count / limit) || 0
    //   },
    //   stacks: result.stacks
    // };
  }

  async getItemDetailed({
    id
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Items.findOneById(id);
    return result;
  }

  async updateItem({
    id, itemName, image, categoryId
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Items.updateById({
      id, itemName, image, categoryId
    });
    return result;
  }

  async deleteItem({
    id
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Items.deleteOneById(id);
    return result;
  }
}

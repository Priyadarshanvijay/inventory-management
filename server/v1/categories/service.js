import { DB } from '../db/db.js';

export default class CategoryService {
  constructor({
    db = new DB()
  }) {
    this.db = db;
  }

  async getCategories() {
    return this.db.Categories.categoryList();
  }

  async updateCategoryName({
    id, categoryName
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Categories.updateCategoryName({
      id, categoryName
    });
    return result;
  }

  async insertCategory({
    categoryName
  }) {
    return this.db.Categories.insertCategory({
      categoryName
    });
  }

  async deleteCategory({
    id
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Categories.deleteOneById(id);
    return result;
  }
}

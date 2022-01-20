import { Categories as BaseCategories } from '../categories.js';

export class Categories extends BaseCategories {
  deleteOneById(id) {
    return this.db(this.name).where({ id }).del();
  }

  categoryList() {
    return this.db(this.name).select('*');
  }

  insertCategory({
    categoryName
  }) {
    return this.db(this.name).insert({
      category_name: categoryName
    }, ['id']);
  }

  updateCategoryName({
    id, categoryName
  }) {
    if (!id) throw Error('Undefined ID supplied to DB Update function');
    return this.db(this.name)
      .where({ id })
      .update(
        JSON.parse(JSON.stringify({
          category_name: categoryName
        })),
        ['id']
      );
  }

  constructor({ db }) {
    super();
    this.name = 'categories';
    this.db = db;
  }
}
export default Categories;

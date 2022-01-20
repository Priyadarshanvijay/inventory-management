// Abstract class / interface declaration file
export class Categories {
  constructor() {
    if (this.constructor === Categories) {
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

  categoryList() {
    throw new Error(
      `Method not Declared yet, input: , class: ${this.constructor.name}`
    );
  }

  insertCategory({
    categoryName
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${categoryName}, class: ${this.constructor.name}`
    );
  }

  updateCategoryName({
    id, categoryName
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${id}, ${categoryName}, class: ${this.constructor.name}`
    );
  }
}

export default Categories;

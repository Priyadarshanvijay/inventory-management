import responder from '../../utils/responseHandler.js';
// import log from '../../utils/logger.js';
import NotFoundError from '../../utils/error/notFound.js';

const log = { error: () => {} };

export class CategoriesController {
  constructor({
    categoriesService
  }) {
    this.category = categoriesService;
  }

  async getCategories(req, res, next) {
    try {
      const categoryList = await this.category.getCategories();
      return responder(res)(null, categoryList);
    } catch (err) {
      log.error('Error while fetching category list');
      log.error(err);
      return next(err);
    }
  }

  async updateCategoryName(req, res, next) {
    try {
      const { id } = req.params;
      const { categoryName } = req.body;
      const success = await this.category.updateCategoryName({
        id, categoryName
      });
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while updating category name');
      log.error(err);
      return next(err);
    }
  }

  async insertCategory(req, res, next) {
    try {
      const {
        categoryName
      } = req.body;
      const insertedId = await this.category.insertCategory({
        categoryName
      });
      return responder(res)(null, insertedId);
    } catch (err) {
      log.error('Error while inserting category');
      log.error(err);
      return next(err);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const success = await this.category.deleteCategory({ id });
      if (!success) {
        return responder(res)(
          new NotFoundError(404, 'No category found to delete'),
          null
        );
      }
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while deleting category');
      log.error(err);
      return next(err);
    }
  }
}

export default CategoriesController;

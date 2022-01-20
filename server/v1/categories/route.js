import express from 'express';

export class CategoriesRouter {
  get Router() {
    return this.router;
  }

  constructor({ controller }) {
    this.router = express.Router();
    this.router.get(
      '/',
      (req, res, next) => controller.getCategories(req, res, next)
    );
    this.router.post(
      '/',
      (req, res, next) => controller.insertCategory(req, res, next)
    );
    this.router.put(
      '/:id',
      (req, res, next) => controller.updateCategoryName(req, res, next)
    );
    this.router.delete(
      '/:id',
      (req, res, next) => controller.deleteCategory(req, res, next)
    );
  }
}

export default CategoriesRouter;

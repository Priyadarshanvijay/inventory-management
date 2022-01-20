import express from 'express';

export class ItemsRouter {
  get Router() {
    return this.router;
  }

  constructor({ controller }) {
    this.router = express.Router();
    this.router.get(
      '/',
      (req, res, next) => controller.getItemList(req, res, next)
    );
    this.router.get(
      '/:id',
      (req, res, next) => controller.getItemDetailed(req, res, next)
    );
    this.router.post(
      '/',
      (req, res, next) => controller.insertItem(req, res, next)
    );
    this.router.put(
      '/:id',
      (req, res, next) => controller.updateItem(req, res, next)
    );
    this.router.delete(
      '/:id',
      (req, res, next) => controller.deleteItem(req, res, next)
    );
  }
}

export default ItemsRouter;

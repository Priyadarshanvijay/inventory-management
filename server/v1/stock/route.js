import express from 'express';

export class StockRouter {
  get Router() {
    return this.router;
  }

  constructor({ controller }) {
    this.router = express.Router();
    this.router.post(
      '/',
      (req, res, next) => controller.insertStock(req, res, next)
    );
    this.router.put(
      '/:id',
      (req, res, next) => controller.updateStock(req, res, next)
    );
    this.router.delete(
      '/:id',
      (req, res, next) => controller.deleteStock(req, res, next)
    );
  }
}

export default StockRouter;

import responder from '../../utils/responseHandler.js';
import log from '../../utils/logger.js';
import NotFoundError from '../../utils/error/notFound.js';

export class StockController {
  constructor({
    stockService
  }) {
    this.stock = stockService;
  }

  async updateStock(req, res, next) {
    try {
      const { id } = req.params;
      const { incrementBy } = req.body;
      const success = await this.stock.updateStock({
        id, incrementBy
      });
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while updating stock details');
      log.error(err);
      return next(err);
    }
  }

  async insertStock(req, res, next) {
    try {
      const {
        itemId, incomingQuantity, supplierId, manufacturerId
      } = req.body;
      const insertedId = await this.stock.insertStock({
        itemId, incomingQuantity, supplierId, manufacturerId
      });
      return responder(res)(null, insertedId);
    } catch (err) {
      log.error('Error while inserting stock');
      log.error(err);
      return next(err);
    }
  }

  async deleteStock(req, res, next) {
    try {
      const { id } = req.params;
      const success = await this.stock.deleteStock({ id });
      if (!success) {
        return responder(res)(
          new NotFoundError(404, 'No Stock found to delete'),
          null
        );
      }
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while deleting stock');
      log.error(err);
      return next(err);
    }
  }
}

export default StockController;

import responder from '../../utils/responseHandler.js';
import log from '../../utils/logger.js';
import NotFoundError from '../../utils/error/notFound.js';

export class ItemsController {
  constructor({
    itemsService
  }) {
    this.items = itemsService;
  }

  async getItemList(req, res, next) {
    try {
      const { limit, page } = req.query;
      const itemList = await this.items.getItems({ limit, page });
      if (itemList && itemList.length === 0) {
        return responder(res)(
          new NotFoundError(404, 'No Items found'),
          null
        );
      }
      return responder(res)(null, itemList);
    } catch (err) {
      log.error('Error while fetching questions from DB');
      log.error(err);
      return next(err);
    }
  }

  async getItemDetailed(req, res, next) {
    try {
      const { id } = req.params;
      const success = await this.items.getItemDetailed({ id });
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while Fetching item details');
      log.error(err);
      return next(err);
    }
  }

  async updateItem(req, res, next) {
    try {
      const { id } = req.params;
      const { itemName, image, categoryId } = req.body;
      const success = await this.items.updateItem({
        id, itemName, image, categoryId
      });
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while updating item details');
      log.error(err);
      return next(err);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const success = await this.items.deleteItem({ id });
      if (!success) {
        return responder(res)(
          new NotFoundError(404, 'No Item found to delete'),
          null
        );
      }
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while deleting item');
      log.error(err);
      return next(err);
    }
  }
}

export default ItemsController;

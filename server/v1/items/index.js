import express from 'express';

import { Knex } from '../db/psql/db.js';
import { ItemsRouter } from './route.js';
import { ItemsController } from './controller.js';
import ItemsService from './service.js';

export const itemsRouter = express.Router();

const db = new Knex();

const items = new ItemsRouter({
  controller: new ItemsController({
    itemsService: new ItemsService({
      db
    })
  })
});

itemsRouter.use('/item', items.Router);

export default { itemsRouter };

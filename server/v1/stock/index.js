import express from 'express';
import { Knex } from '../db/psql/db.js';
import { StockRouter } from './route.js';
import { StockController } from './controller.js';
import StockService from './service.js';

export const stockRouter = express.Router();

const db = new Knex();

const stock = new StockRouter({
  controller: new StockController({
    stockService: new StockService({
      db
    })
  })
});

stockRouter.use('/stock', stock.Router);

export default { stockRouter };

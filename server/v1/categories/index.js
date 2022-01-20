import express from 'express';
import { Knex } from '../db/psql/db.js';
import { CategoriesRouter } from './route.js';
import { CategoriesController } from './controller.js';
import CategoriesService from './service.js';

export const categoriesRouter = express.Router();

const db = new Knex();

const categories = new CategoriesRouter({
  controller: new CategoriesController({
    categoriesService: new CategoriesService({
      db
    })
  })
});

categoriesRouter.use('/categories', categories.Router);

export default { categoriesRouter };

import express from 'express';
import { Knex } from '../db/psql/db.js';
import { CompaniesRouter } from './route.js';
import { CompaniesController } from './controller.js';
import CompaniesService from './service.js';

export const companiesRouter = express.Router();

const db = new Knex();

const companies = new CompaniesRouter({
  controller: new CompaniesController({
    companiesService: new CompaniesService({
      db
    })
  })
});

companiesRouter.use('/company', companies.Router);

export default { companiesRouter };

import express from 'express';

export class CompaniesRouter {
  get Router() {
    return this.router;
  }

  constructor({ controller }) {
    this.router = express.Router();
    this.router.get(
      '/',
      (req, res, next) => controller.getCompanies(req, res, next)
    );
    this.router.post(
      '/',
      (req, res, next) => controller.insertCompany(req, res, next)
    );
    this.router.put(
      '/:id',
      (req, res, next) => controller.updateCompanyDetails(req, res, next)
    );
    this.router.delete(
      '/:id',
      (req, res, next) => controller.deleteCompany(req, res, next)
    );
  }
}

export default CompaniesRouter;

import responder from '../../utils/responseHandler.js';
import log from '../../utils/logger.js';
import NotFoundError from '../../utils/error/notFound.js';

export class CompaniesController {
  constructor({
    companiesService
  }) {
    this.companies = companiesService;
  }

  async getCompanies(req, res, next) {
    try {
      const companiesList = await this.companies.getCompanies();
      return responder(res)(null, companiesList);
    } catch (err) {
      log.error('Error while fetching company list');
      log.error(err);
      return next(err);
    }
  }

  async insertCompany(req, res, next) {
    try {
      const { companyName, city } = req.body;
      const success = await this.companies.insertCompany({
        companyName, city
      });
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while inserting new company details');
      log.error(err);
      return next(err);
    }
  }

  async updateCompanyDetails(req, res, next) {
    try {
      const { id } = req.params;
      const { companyName, city } = req.body;
      const insertedId = await this.companies.updateCompanyDetails({
        id, companyName, city
      });
      return responder(res)(null, insertedId);
    } catch (err) {
      log.error('Error while updating company details');
      log.error(err);
      return next(err);
    }
  }

  async deleteCompany(req, res, next) {
    try {
      const { id } = req.params;
      const success = await this.companies.deleteCompany({ id });
      if (!success) {
        return responder(res)(
          new NotFoundError(404, 'No company found to delete'),
          null
        );
      }
      return responder(res)(null, success);
    } catch (err) {
      log.error('Error while deleting company');
      log.error(err);
      return next(err);
    }
  }
}

export default CompaniesController;

import { DB } from '../db/db.js';

export default class CompaniesService {
  constructor({
    db = new DB()
  }) {
    this.db = db;
  }

  async getCompanies() {
    return this.db.Companies.getCompanies();
  }

  async insertCompany({
    companyName, city
  }) {
    return this.db.Companies.insertCompany({
      companyName, city
    });
  }

  async updateCompanyDetails({
    id, companyName, city
  }) {
    if (!id) throw new Error('Id not supplied');
    return this.db.Companies.updateCompanyDetails({
      id, companyName, city
    });
  }

  async deleteCompany({
    id
  }) {
    if (!id) throw new Error('Id not supplied');
    const result = await this.db.Companies.deleteOneById(id);
    return result;
  }
}

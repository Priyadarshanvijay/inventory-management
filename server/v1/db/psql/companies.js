import { Companies as BaseCompanies } from '../companies.js';

export class Companies extends BaseCompanies {
  getCompanies() {
    return this.db(this.name).select('*');
  }

  deleteOneById(id) {
    return this.db(this.name).where({ id }).del();
  }

  insertCompany({
    companyName, city
  }) {
    return this.db(this.name).insert({
      company_name: companyName,
      city
    }, ['id']);
  }

  updateCompanyDetails({
    id, companyName, city
  }) {
    if (!id) throw Error('Undefined ID supplied to DB Update function');
    return this.db(this.name)
      .where({ id })
      .update(
        JSON.parse(JSON.stringify({
          company_name: companyName,
          city
        })),
        ['id']
      );
  }

  constructor({ db }) {
    super();
    this.name = 'companies';
    this.db = db;
  }
}
export default Companies;

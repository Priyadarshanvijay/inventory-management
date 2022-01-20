// Abstract class / interface declaration file
export class Companies {
  constructor() {
    if (this.constructor === Companies) {
      throw new Error(
        `Abstract class ${this.constructor.name} cannot be instantiated`
      );
    }
  }

  getCompanies() {
    throw new Error(
      `Method not Declared yet, input:, class: ${this.constructor.name}`
    );
  }

  deleteOneById(id) {
    throw new Error(
      `Method not Declared yet, input: ${id}, class: ${this.constructor.name}`
    );
  }

  insertCompany({
    companyName, city
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${companyName}, ${city}, class: ${this.constructor.name}`
    );
  }

  updateCompanyDetails({
    id, companyName, city
  }) {
    throw new Error(
      `Method not Declared yet, \
      input: ${id}, ${companyName}, ${city}, class: ${this.constructor.name}`
    );
  }
}

export default Companies;

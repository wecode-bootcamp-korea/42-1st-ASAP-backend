class QueryBuilder {
  constructor({ mainCategoryId, subCategoryId, formulation, scent, limit }) {
    this.limit = limit || 10;

    this.whereParams = {
      ...(mainCategoryId && { mainCategoryId }),
      ...(subCategoryId && { subCategoryId }),
      ...(formulation && { formulation }),
      ...(scent && { scent }),
    };

    this.whereMapper = {
      mainCategoryId: this.mainCategoryFilterBuilder,
      subCategoryId: this.subCategoryFilterBuilder,
      formulation: this.formulationFilterBuilder,
      scent: this.scentFilterBuilder,
    };
  }

  createWhereClause() {
    const whereConditions = Object.entries(this.whereParams).map(
      ([key, value]) => {
        return this.whereMapper[key](value);
      }
    );

    return whereConditions.length !== 0
      ? `WHERE ${whereConditions.join(' AND ')}`
      : '';
  }

  createLimitClause() {
    return `LIMIT ${Number(this.limit)}`;
  }

  mainCategoryFilterBuilder(mainCategoryId) {
    return `sub_cat.main_category_id = ${mainCategoryId}`;
  }

  subCategoryFilterBuilder(subCategoryId) {
    return `p.sub_category_id = ${subCategoryId}`;
  }

  formulationFilterBuilder(formulation) {
    return `pfm.formulation like "%${formulation}%"`;
  }

  scentFilterBuilder(scent) {
    return `prod_s.scents like "%${scent}%"`;
  }

  buildQuery() {
    return `
		${this.createWhereClause()}
		${this.createLimitClause()}
	`;
  }
}

module.exports = QueryBuilder;

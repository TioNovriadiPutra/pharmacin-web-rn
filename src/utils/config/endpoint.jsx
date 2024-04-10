const authPrefix = "/auth";
const pabrikanPrefix = "/drug-factory";
const drugPrefix = "/drug";
const drugCategoryPrefix = drugPrefix + "/category";

export const endpoints = {
  login: authPrefix + "/login/desktop",
  registerAdmin: authPrefix + "/register/admin",
  logout: authPrefix + "/logout",
  getDrugFactories: pabrikanPrefix,
  getDrugFactoryDetail: pabrikanPrefix + "/partnership",
  getDrugCategories: drugCategoryPrefix,
  getDrugs: drugPrefix,
};

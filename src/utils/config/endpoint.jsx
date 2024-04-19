const authPrefix = "/auth";
const pabrikanPrefix = "/drug-factory";
const drugPrefix = "/drug";
const drugCategoryPrefix = drugPrefix + "/category";
const unitPrefix = "/unit";
const userPrefix = "/user";
const transactionPrefix = "/transaction";
const purchaseTransactionPrefix = transactionPrefix + "/purchase";

export const endpoints = {
  login: authPrefix + "/login/desktop",
  registerAdmin: authPrefix + "/register/admin",
  logout: authPrefix + "/logout",
  getDrugFactories: pabrikanPrefix,
  getDrugFactoryDetail: pabrikanPrefix + "/partnership",
  getDrugCategories: drugCategoryPrefix,
  getDrugs: drugPrefix,
  getDrugsByDrugFactory: drugPrefix + "/factory",
  getUnits: unitPrefix,
  getUserProfile: userPrefix + "/profile",
  getPurchaseTransactions: purchaseTransactionPrefix,
};

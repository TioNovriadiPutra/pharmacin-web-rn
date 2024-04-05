const authPrefix = "/auth";
const pabrikanPrefix = "/drug-factory";

export const endpoints = {
  login: authPrefix + "/login/desktop",
  registerAdmin: authPrefix + "/register/admin",
  logout: authPrefix + "/logout",
  getDrugFactories: pabrikanPrefix,
  getDrugFactoryDetail: pabrikanPrefix + "/partnership",
};

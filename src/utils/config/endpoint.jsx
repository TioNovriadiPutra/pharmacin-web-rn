const authPrefix = "/auth";
const pabrikanPrefix = "/drug-factory";
const drugPrefix = "/drug";
const drugCategoryPrefix = drugPrefix + "/category";
const unitPrefix = "/unit";
const userPrefix = "/user";
const administratorPrefix = userPrefix + "/administrator";
const employeePrefix = userPrefix + "/employee";
const doctorAssistantPrefix = userPrefix + "/assistant";
const transactionPrefix = "/transaction";
const purchaseTransactionPrefix = transactionPrefix + "/purchase";
const stockPrefix = "/stock";
const patientPrefix = "/patient";
const occupationPrefix = "/occupation";
const doctorPrefix = "/doctor";
const doctorSpecialityPrefix = "/speciality";
const queuePrefix = "/queue";
const clinicPrefix = "/clinic";
const actionPrefix = "/action";

export const endpoints = {
  login: authPrefix + "/login/desktop",
  registerAdmin: authPrefix + "/register/admin",
  registerAdministrator: authPrefix + "/register/administrator",
  registerEmployee: authPrefix + "/register/employee",
  registerDoctor: authPrefix + "/register/doctor",
  registerDoctorAssistant: authPrefix + "/register/assistant",
  logout: authPrefix + "/logout",
  getDrugFactories: pabrikanPrefix,
  getDrugFactoryDetail: pabrikanPrefix + "/partnership",
  getDrugCategories: drugCategoryPrefix,
  getDrugs: drugPrefix,
  getDrugsByDrugFactory: drugPrefix + "/factory",
  getDrugsAssessment: drugPrefix + "/assessment",
  getUnits: unitPrefix,
  getUserProfile: userPrefix + "/profile",
  getUserDetail: userPrefix,
  getAdministrators: administratorPrefix,
  getEmployees: employeePrefix,
  getDoctorAssistants: doctorAssistantPrefix,
  getPurchaseTransactions: purchaseTransactionPrefix,
  getStocks: stockPrefix,
  getPatients: patientPrefix,
  addPatientQueue: patientPrefix + "/queue",
  getOccupations: occupationPrefix,
  getDoctors: doctorPrefix,
  getDoctorSpecialities: doctorSpecialityPrefix,
  addAssessments: doctorPrefix + "/assessment",
  getConsultingQueues: queuePrefix,
  getDoctorConsultingQueues: queuePrefix + doctorPrefix + "/consulting",
  cancelQueue: queuePrefix + "/cancel",
  getClinicDetail: clinicPrefix,
  getActions: actionPrefix,
};

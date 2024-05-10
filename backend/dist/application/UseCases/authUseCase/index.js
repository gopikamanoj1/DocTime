"use strict";
// authUseCase.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendImageUseCase = exports.sendAudioUseCase = exports.downloadPrescriptionUseCase = exports.getSearchQueryUseCase = exports.forgotPasswordUseCase = exports.getConsultCallStatusUseCase = exports.getConverstationsUseCase = exports.getConverstationByIdUseCase = exports.createConverstationUseCase = exports.sendMessegesUseCase = exports.updateEmailUseCase = exports.changePasswordUseCase = exports.appointmentDetailsUseCase = exports.checkOTPUseCase = exports.searchDoctrsUseCase = exports.loadSuccessUseCase = exports.bookAppointmentUseCase = exports.getAvailableSlotUseCase = exports.generateOtpUseCase = exports.viewDoctorDetailsUseCase = exports.updatePatientProfileUseCase = exports.findDoctorUseCase = exports.logoutUseCase = exports.verifyOtpUseCase = exports.registerUseCase = exports.loginUseCase = void 0;
const loginUseCase_1 = __importDefault(require("./loginUseCase"));
exports.loginUseCase = loginUseCase_1.default;
const registerUseCase_1 = __importDefault(require("./registerUseCase"));
exports.registerUseCase = registerUseCase_1.default;
const verifyOtpUseCase_1 = __importDefault(require("./verifyOtpUseCase"));
exports.verifyOtpUseCase = verifyOtpUseCase_1.default;
const logoutUseCase_1 = __importDefault(require("./logoutUseCase"));
exports.logoutUseCase = logoutUseCase_1.default;
const findDoctorUseCase_1 = __importDefault(require("./findDoctorUseCase"));
exports.findDoctorUseCase = findDoctorUseCase_1.default;
const updatePatientProfileUseCase_1 = __importDefault(require("./updatePatientProfileUseCase"));
exports.updatePatientProfileUseCase = updatePatientProfileUseCase_1.default;
const viewDoctorDetailsUseCase_1 = __importDefault(require("./viewDoctorDetailsUseCase"));
exports.viewDoctorDetailsUseCase = viewDoctorDetailsUseCase_1.default;
const generateOtpUseCase_1 = __importDefault(require("./generateOtpUseCase"));
exports.generateOtpUseCase = generateOtpUseCase_1.default;
const getAvailableSlotUseCase_1 = __importDefault(require("./getAvailableSlotUseCase"));
exports.getAvailableSlotUseCase = getAvailableSlotUseCase_1.default;
const bookAppointmentUseCase_1 = __importDefault(require("./bookAppointmentUseCase"));
exports.bookAppointmentUseCase = bookAppointmentUseCase_1.default;
const loadSuccessUseCase_1 = __importDefault(require("./loadSuccessUseCase"));
exports.loadSuccessUseCase = loadSuccessUseCase_1.default;
const searchDoctrsUseCase_1 = __importDefault(require("./searchDoctrsUseCase"));
exports.searchDoctrsUseCase = searchDoctrsUseCase_1.default;
const checkOTPUseCase_1 = __importDefault(require("./checkOTPUseCase"));
exports.checkOTPUseCase = checkOTPUseCase_1.default;
const appointmentDetailsUseCase_1 = __importDefault(require("./appointmentDetailsUseCase"));
exports.appointmentDetailsUseCase = appointmentDetailsUseCase_1.default;
const changePasswordUseCase_1 = __importDefault(require("./changePasswordUseCase"));
exports.changePasswordUseCase = changePasswordUseCase_1.default;
const updateEmailUseCase_1 = __importDefault(require("./updateEmailUseCase"));
exports.updateEmailUseCase = updateEmailUseCase_1.default;
const sendMessegesUseCase_1 = __importDefault(require("./sendMessegesUseCase"));
exports.sendMessegesUseCase = sendMessegesUseCase_1.default;
const createConverstationUseCase_1 = __importDefault(require("./createConverstationUseCase"));
exports.createConverstationUseCase = createConverstationUseCase_1.default;
const getConverstationByIdUseCase_1 = __importDefault(require("./getConverstationByIdUseCase"));
exports.getConverstationByIdUseCase = getConverstationByIdUseCase_1.default;
const getConverstationsUseCase_1 = __importDefault(require("./getConverstationsUseCase"));
exports.getConverstationsUseCase = getConverstationsUseCase_1.default;
const getConsultCallStatusUseCase_1 = __importDefault(require("./getConsultCallStatusUseCase"));
exports.getConsultCallStatusUseCase = getConsultCallStatusUseCase_1.default;
const forgotPasswordUseCase_1 = __importDefault(require("./forgotPasswordUseCase"));
exports.forgotPasswordUseCase = forgotPasswordUseCase_1.default;
const getSearchQueryUseCase_1 = __importDefault(require("./getSearchQueryUseCase"));
exports.getSearchQueryUseCase = getSearchQueryUseCase_1.default;
const downloadPrescriptionUseCase_1 = __importDefault(require("./downloadPrescriptionUseCase"));
exports.downloadPrescriptionUseCase = downloadPrescriptionUseCase_1.default;
const sendAudioUseCase_1 = __importDefault(require("./sendAudioUseCase"));
exports.sendAudioUseCase = sendAudioUseCase_1.default;
const sendImageUseCase_1 = __importDefault(require("./sendImageUseCase"));
exports.sendImageUseCase = sendImageUseCase_1.default;
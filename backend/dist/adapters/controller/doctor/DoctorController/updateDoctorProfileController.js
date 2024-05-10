"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imagesService_1 = require("../../../../utils/imagesService");
exports.default = (dependencies) => {
    const { updateDoctorProfileUseCase } = dependencies.useCase;
    if (!updateDoctorProfileUseCase) {
        console.log('EROOOOORRR');
    }
    const updateDoctorProfileController = async (req, res) => {
        try {
            const { name, email, phone, specialization, street, city, state, zipcode, fees, image, age, dob } = req.body;
            const imageUrl = await (0, imagesService_1.uploadToS3)(image, `${email}-profileImage`);
            const data = {
                name,
                email,
                phone,
                specialization,
                street,
                city,
                state,
                zipcode,
                fees,
                image: imageUrl,
                age,
                dob
            };
            console.log(data, "data in updateDoctorProfileController");
            // req.session.doctorProfile = data;
            const response = await updateDoctorProfileUseCase(dependencies).executeFunction(data);
            // console.log(response,"res in new contro");
            if (response) {
                res.status(200).json({ status: true, data: response.data });
            }
            else {
                return ({ status: false, messege: "error in updation" });
            }
        }
        catch (error) {
            console.log(error, "error in profile controller ");
        }
    };
    return updateDoctorProfileController;
};
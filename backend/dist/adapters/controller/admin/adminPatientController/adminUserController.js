"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (dependencies) => {
    const { adminUserUseCase } = dependencies.useCase;
    const adminUserController = async (req, res) => {
        try {
            // Call the executeFunction method of the adminUserUseCase with any required data
            const response = await adminUserUseCase(dependencies).executeFunction(req.body);
            // Check if the response object and its data property are defined
            if (response && response.status && response.data) {
                res.json({ status: true, data: response.data });
            }
            else {
                res.json({ status: false, message: "Data not found" });
            }
        }
        catch (error) {
            console.error("Error in adminUserController:", error);
            res.status(500).json({ status: false, message: "Internal server error" });
        }
    };
    return adminUserController;
};

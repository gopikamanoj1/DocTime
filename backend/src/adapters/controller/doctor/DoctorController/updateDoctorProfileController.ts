import { Request, Response } from "express";
import session from "express-session";
import {uploadToS3} from "../../../../utils/imagesService";


export default (dependencies: any) => {
    const { updateDoctorProfileUseCase } = dependencies.useCase;

    if (!updateDoctorProfileUseCase) {
        console.log('EROOOOORRR');
        
    }

    const updateDoctorProfileController = async (req: Request, res: Response) => {
        try {

            console.log( process.env.YOUR_ACCESS_KEY_ID,'HHHHHHHHHHHHHHH');
            
            
            const { name, email, phone, specialization, street, city, state, zipcode, fees, image,age,dob } = req.body

            let img:string=''
            if(image){
                const s3UrlRegex = /^https:\/\/doctime3\.s3\.amazonaws\.com/;
                const base64Regex = /^data:image\/([a-zA-Z]*);base64,/;
            
                if (s3UrlRegex.test(image)) {
                   img=image
                    console.log('Image is hosted on Amazon S3');
                } else if (base64Regex.test(image)) {
                    const imageUrl:any= await uploadToS3(image, `${email}-profileImage`);
                    img=imageUrl
                    console.log('Image is a base64 string');
                } 
            }
            // 
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
                image: img,
                age,
                dob
            }
            console.log(data,"data in updateDoctorProfileController");
            // req.session.doctorProfile = data;

            const response = await updateDoctorProfileUseCase(dependencies).executeFunction(data)
            // console.log(response,"res in new contro");
           
            

            if (response) {

                res.status(200).json({ status: true, data: response.data })
            } else {
                return ({ status: false, messege: "error in updation" })
            }

        } catch (error) {
            console.log(error, "error in profile controller ");

        }


    };

    return updateDoctorProfileController;
};


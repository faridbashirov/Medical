import axios from "./index";

export const registerFetch = async (obj) => {
    try {
        console.log(obj)
        const resp = await axios.post("account/patient_register",
        {
        
            first_name:obj.first_name,
            email:obj.email,
            last_name:obj.last_name,
            phone_number:obj.phone_number,
            location:obj.location,
            password:obj.password,
            location:obj.category,
            username:obj.username

        }
        )
    
        return obj
    } catch (error) {
       return error.response.data
    }
}
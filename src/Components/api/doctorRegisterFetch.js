import axios from "./index";

export const doctorRegisterFetch = async (obj) => {
    try {
        console.log(obj)
        const resp = await axios.post("account/doctor_register",
        {
        
            first_name:obj.first_name,
            email:obj.email,
            last_name:obj.last_name,
            phone_number:obj.phone_number,
            password:obj.password,
            location:obj.location,
            username:obj.username,
            hospital:obj.hospital,
            position:obj.position,

        }
        )
    
        return resp.data
    } catch (error) {
       return error.response.data
    }
}
import axios from "./index";

export const doctorBook = async (obj) => {
    try {
        console.log(obj)
        const resp = await axios.post("account/doctor_reservation/",
        {
            doctor_id:obj.doctor_id,
            full_name:obj.name,
            phone_number:obj.phone,
            clock:obj.time,
            date:obj.date,
            category:obj.category

        }
        )
        console.log(resp.data);
    
        return resp.data
    } catch (error) {
       return error.response.data
    }
}
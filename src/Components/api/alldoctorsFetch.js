import axios from "./index";

export const alldoctorsFetch = async (page) => {
    try {
        console.log(page);
        const resp = await axios.get(`account/doctors?page=${page}`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
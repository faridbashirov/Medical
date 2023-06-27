import axios from "./index";

export const hospitalDetailFetch = async (id) => {
    try {
        const resp = await axios.get(`hospital/hospital/${id}`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
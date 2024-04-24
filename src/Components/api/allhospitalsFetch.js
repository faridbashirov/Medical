import axios from "./index";

export const allhospitalFetch = async () => {
    
    try {
        const resp = await axios.get("hospital/hospitals")
    
        return resp.data
    } catch (error) {
       return [];
    }
}
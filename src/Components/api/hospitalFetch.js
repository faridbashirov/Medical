import axios from "./index";

export const hospitalFetch = async () => {
    try {
        const resp = await axios.get("hospital/hospitals_search")
    
        return resp.data
    } catch (error) {
       return [];
    }
}
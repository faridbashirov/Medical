import axios from "./index";

export const PopularSearchFetch = async () => {
    try {
        const resp = await axios.get("hospital/popular_search")
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
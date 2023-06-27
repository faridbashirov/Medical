import axios from "./index";

export const BestsellersFetch = async () => {
    try {
        const resp = await axios.get("main/best_seller")
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
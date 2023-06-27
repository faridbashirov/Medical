import axios from "./index";

export const BestoffersFetch = async () => {
    try {
        const resp = await axios.get("main/best_offer")
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
import axios from "./index";

export const LikedoffersFetch = async () => {
    try {
        const resp = await axios.get("main/liked_offer")
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
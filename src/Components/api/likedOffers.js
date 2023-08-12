import axios from "./index";

export const LikedoffersFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang +"/"}main/liked_offer`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
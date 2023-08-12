import axios from "./index";

export const BestoffersFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang +"/"}main/best_offer`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
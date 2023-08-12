import axios from "./index";

export const BestsellersFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang +"/"}main/best_seller`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
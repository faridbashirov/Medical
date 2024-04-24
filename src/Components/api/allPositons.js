import axios from "./index";

export const allPositionsFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang +"/"}account/all_positions`)
    
        return resp.data
    } catch (error) {
       return [];
    }
}
import axios from "./index";

export const PopularSearchFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang +"/"}hospital/popular_search`)
    
        return resp.data
    } catch (error) {
       return [];
    }
}
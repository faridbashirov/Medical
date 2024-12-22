import axios from "./index";

export const hospitalFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang + "/"}hospital/hospitals_search`)
        return resp.data
    } catch (error) {
       return [];
    }
}
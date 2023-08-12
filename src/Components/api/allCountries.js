import axios from "./index";

export const allCountriesFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang +"/"}main/countries`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
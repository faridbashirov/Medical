import axios from "./index";

export const allCountriesFetch = async (page) => {
    try {
        const resp = await axios.get(`main/countries`)
    
        return resp.data
    } catch (error) {
       return error.message;
    }
}
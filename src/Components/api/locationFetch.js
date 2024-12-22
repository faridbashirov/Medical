import axios from "./index";

export const locationFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang + "/"}main/countries`)
        return resp.data
    } catch (error) {
        console.log(error.message);
    }
}
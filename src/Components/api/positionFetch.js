import axios from "./index";

export const positionFetch = async (lang) => {
    try {
        const resp = await axios.get(`${lang === "ru" ? "" : lang + "/"}account/main_positions`)
        return resp.data
    } catch (error) {
        console.log(error.message);
    }
}
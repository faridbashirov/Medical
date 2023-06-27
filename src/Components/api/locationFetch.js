import axios from "./index";

export const locationFetch = async () => {
    try {
        const resp = await axios.get("main/countries")
    
        return resp.data
    } catch (error) {
        console.log(error.message);
    }
}
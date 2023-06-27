import axios from "./index";

export const positionFetch = async () => {
    try {
        const resp = await axios.get("account/main_positions")
    
        return resp.data
    } catch (error) {
        console.log(error.message);
    }
}
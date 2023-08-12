import axios from "./index";

export const contactFetch = async (obj) => {
    try {
        console.log(obj)
        const resp = await axios.post("main/contact",
        {
        
            first_name:obj.first_name,
            email:obj.email,
            last_name:obj.last_name,
            text:obj.text

        }
        )
        console.log(resp.data);
    
        return resp.data
    } catch (error) {
       return error.response.data
    }
}
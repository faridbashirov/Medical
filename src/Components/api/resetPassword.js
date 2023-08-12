import axios from "./index";
import { axiosPrivate } from "../../api/api";

export const resetPassword = async (obj) => {
    try {
        console.log(obj)
        const resp = await axiosPrivate.post("account/reset-password/",
        {
        
            old_password:obj.oldpassword,
            new_password:obj.password,
            confirm_password:obj.password2


        }
        )
        console.log(resp.data);
    
        return resp.data
    } catch (error) {
        console.log(error.response.data);
       return error.response.data
    }
}
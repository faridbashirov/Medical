import axios from "./index";
import { axiosPrivate } from "../../api/api";

export const UserInfoUpdateFetch = async (obj) => {
    try {
        console.log(obj)
        const resp = await axiosPrivate.put("account/update-user/",
        {
        
            first_name:obj.firstName,
          
            last_name:obj.lastName,
            phone_number:obj.number,
            birthdate:obj?.date["$d"],

        }
        )
        console.log(resp.data);
    
        return resp.data
    } catch (error) {
        console.log(error.response.data);
       return error.response.data
    }
}
import axios from "./index";
import { axiosPrivate } from "../../api/api";

function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

export const UserInfoUpdateFetch = async (obj) => {
    try {
        console.log(obj)

        const resp = await axiosPrivate.put("account/update-user/",
        {
        
            first_name:obj.firstName,
          
            last_name:obj.lastName,
            phone_number:obj.number,
            birthdate:formatDateToYYYYMMDD(obj?.date["$d"])
           

        }
        )
        console.log(resp.data);
    
        return resp.data
    } catch (error) {
        console.log(error.response.data);
       return error.response.data
    }
}
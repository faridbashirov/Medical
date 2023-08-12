import axios from "./index";
import { axiosPrivate } from "../../api/api";

export const allFilterSearch = async (type,country,raiting,page,lang) => {
    try {
        console.log(type,location,page);
        var pageName =``
        if(!page){
             pageName =``

        }
        else{
             pageName =`page=${page}`
        }
        console.log(`hospital/filter?type=${type}&country=${country}&raiting=${raiting}&${pageName}`)
        const resp = await axiosPrivate.get(`${lang === "ru" ? "" : lang + "/" }main/search?type=${type}&country=${country}&raiting=${raiting}&${pageName}`)
        console.log(resp);
        return resp
    } catch (error) {
        
        return error.message
    }
}
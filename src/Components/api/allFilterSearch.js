import axios from "./index";
import { axiosPrivate } from "../../api/api";

export const allFilterSearch = async (type,country,raiting,position,page,lang) => {
    try {
        var pageName =``
        if(!page){
             pageName =``

        }
        else{
             pageName =`page=${page}`
        }
        const resp = await axiosPrivate.get(`${lang === "ru" ? "" : lang + "/" }main/search?type=${type}&country=${country}&raiting=${raiting}&position=${position}&${pageName}`)
        return resp
    } catch (error) {
        
        return []
    }
}
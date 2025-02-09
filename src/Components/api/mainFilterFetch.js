import axios from "./index";
import { axiosPrivate } from "../../api/api";
export const mainFilterSearch = async (type,location,names,position,page,lang) => {
    try {
        var pageName =``
        if(!page){
             pageName =``

        }
        else{
             pageName =`page=${page}`
        }
        const resp = await axiosPrivate.get(`${lang === "ru" ? "" : lang + "/" }hospital/filter?type=${type}&location=${location}&name=${names}&${pageName}`)
        
        return resp
    } catch (error) {
        return {results:[]}
    }
}
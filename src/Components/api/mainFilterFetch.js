import axios from "./index";
import { axiosPrivate } from "../../api/api";
export const mainFilterSearch = async (type,location,names,position,page,lang) => {
    try {
        console.log(type,location,names,page);
        var pageName =``
        if(!page){
             pageName =``

        }
        else{
             pageName =`page=${page}`
        }
        console.log(`hospital/filter?type=${type}&location=${location}&name=${names}&${pageName}`)
        const resp = await axiosPrivate.get(`${lang === "ru" ? "" : lang + "/" }hospital/filter?type=${type}&location=${location}&name=${names}${pageName}`)
        
        return resp
    } catch (error) {
        return {results:[]}
    }
}
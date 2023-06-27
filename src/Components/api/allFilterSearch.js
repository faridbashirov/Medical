import axios from "./index";

export const allFilterSearch = async (type,country,raiting,page) => {
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
        const resp = await axios.get(`main/search?type=${type}&country=${country}&raiting=${raiting}&${pageName}`)
    
        return resp.data
    } catch (error) {
        
        return error.message
    }
}
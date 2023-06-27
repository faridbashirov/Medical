import axios from "./index";

export const mainFilterSearch = async (type,location,names,page) => {
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
        const resp = await axios.get(`hospital/filter?type=${type}&location=${location}&name=${names}&${pageName}`)
    
        return resp.data
    } catch (error) {
        console.log(error.message);
    }
}
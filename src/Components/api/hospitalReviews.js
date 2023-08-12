import axios from "./index";

export const hospitalReviewsFetch = async (id,page,lang) => {
    console.log(page);
    try {
       
        if(page){
            console.log("page");
            const resp = await axios.get(`${lang === "ru" ? "" : lang + "/"}hospital/hospital_reviews/${id}?page=${page}`)
            return resp.data

        }
        else{
            console.log("not page");
            const resp = await axios.get(`${lang === "ru" ? "" : lang + "/"}hospital/hospital_reviews/${id}`)
            return resp.data

        }
      
       
        console.log(resp.data);
    
       
    } catch (error) {
       return 
    }
}


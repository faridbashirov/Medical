import axios from "./index";

export const doctorReviewsFetch = async (id,page) => {
    console.log(page);
    try {
       
        if(page){
            console.log(lang);
            const resp = await axios.get(`account/doctor_reviews/${id}?page=${page}`)
            console.log(resp.data);
            return resp.data

        }
        else{
            console.log("not page");
            const resp = await axios.get(`account/doctor_reviews/${id}`)
            console.log(resp.data);
            return resp.data

        }
      
       
       
    
       
    } catch (error) {
       return 
    }
}
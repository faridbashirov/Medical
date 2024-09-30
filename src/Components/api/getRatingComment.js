import { axiosPrivate } from "../../api/api";

export const getRatingComment = async (obj) => {
    try {
        console.log(obj)
        const resp = await axiosPrivate.post("hospital/hospital_review_create",
        {
            hospital:obj.hospital,
            text:obj.text,
            rate:obj.rate
        }
        )
        console.log(resp.data, "comment");
    
        return resp.data
    } catch (error) {
        console.log(error.response.data);
       return error.response.data
    }
}
import { axiosPrivate } from "../../api/api";

export const postRatingDoctor = async (obj) => {
    try {
        console.log(obj)
        const resp = await axiosPrivate.post("account/doctor_review_create",
        {
            doctor:obj.doctor,
            text:obj.text,
            rate:obj.rate
        }
        )
        return resp.data
    } catch (error) {
        console.log(error.response.data);
       return error.response.data
    }
}
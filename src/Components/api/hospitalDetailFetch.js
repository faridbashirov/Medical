import axios from "./index";
import { useState,useEffect } from "react";
export default function DetailFetch(id,lang){

   
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [hospital,setHospital] =useState({})
    const [services,setServices] =useState([])
    const [advantages,setAdvantages]=useState([])
    const [discount,setDiscount]=useState([])
    const [questions,setQuestions]=useState([])
    const [images,setImages]=useState([])
    const [reviews,setReviews]=useState([])

    useEffect(() => {
        (
            async function(){
                try{
                    
                    setLoading(true)
                   
                        const response = await axios.get(`${lang === "ru" ? "" : lang + "/"}hospital/hospital/${id}`)

                    
                    
                    setHospital(response.data)
                    setServices(response.data.services)
                    setAdvantages(response.data.hospital_advantages)
                    setDiscount(response.data.hospital_discount)
                    setQuestions(response.data.hospital_faq)
                    setReviews(response.data.review)
                    setImages(response.data.hospital_images)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [id,lang])

    return { hospital,services,advantages,discount,questions,reviews,images, error, loading }

}
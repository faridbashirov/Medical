import { useEffect, useState } from "react"
import axios from "axios"


export default function allReviewsFetch(){

    const [data,setData] = useState({})
    const [hospitalreviews,setHospitalReviews] = useState([])
    const [doctorreviews,setDoctorReviews] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    
 

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(`https://hospitalbackend.efgroup.az/main/all_reviews`)
                      
                   
                   
                    setData(response.data)
                    setHospitalReviews(response.data.hospital)
                    setDoctorReviews(response.data.doctor)
                    
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    return { data,error, loading,hospitalreviews,doctorreviews }
}
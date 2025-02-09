import { useEffect, useState } from "react"
import axios from "axios"


export default function ContactInfoFetch(){

    const [data1,setData] = useState([])
    const [error1,setError] = useState(null)
    const [loading1,setLoading] = useState(false)
    
 

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(`https://hospitalbackend.efgroup.az/main/contact_info`)
                    setData(response.data)
                    
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    return { data1,error1, loading1}
}
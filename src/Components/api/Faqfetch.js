import { useEffect, useState } from "react"
import axios from "axios"


export default function faqFetch(lang){

    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    
 

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(`https://hospitalbackend.efgroup.az/${lang === "ru" ? "" :lang + "/"}main/faq`)
                      
                    console.log(response.data)
                   
                    setData(response.data)
                    
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [lang])

    return { data,error, loading}
}
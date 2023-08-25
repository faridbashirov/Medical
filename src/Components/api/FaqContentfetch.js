import { useEffect, useState } from "react"
import axios from "axios"


export default function faqContentFetch(lang){

    const [data2,setData] = useState([])
    const [error2,setError] = useState(null)
    const [loading2,setLoading] = useState(false)
    
 

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(`https://hospitalbackend.efgroup.az/${lang === "ru" ? "" :lang + "/"}main/faq_main_text`)
                   
                      
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

    return { data2,error2, loading2}
}
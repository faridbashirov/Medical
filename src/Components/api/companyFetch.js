import { useEffect, useState } from "react"
import axios from "axios"


export default function CompanyFetch(){

    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    
 

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(`https://hospitalbackend.efgroup.az/main/corporate_hospitals`)
                   
                      
                    console.log(response.data)
                   
                    setData(response.data)
                    
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    return { data,error, loading}
}
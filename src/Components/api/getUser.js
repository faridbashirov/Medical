
import { useEffect, useState } from "react"



import { axiosPrivate } from "../../api/api"

export default function getUserFetch(page){

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
   
    

    useEffect(() => {
        (
            async function(){
                setLoading(true)
               
                    axiosPrivate.get(`account/user_get`)
                    .then((res) => {
                        setData(res);
                         
                    })
                    .catch((err) => {
                        setError(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                 }
        )()
    }, [])

    return { data, error, loading}

}


import { useEffect, useState } from "react"

import { axiosPrivate } from "../../api/api"

export default function favoritesDoctorsFetch(page){

    const [data,setData] = useState([])
    const [filterdata,setFilterdata] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)
    const [count,setCount] = useState("")
    const [add,setAdd] = useState(false)
    useEffect(() => {
        (
            async function(){
                setLoading(true)
                if(page){
                    axiosPrivate.get(`card/get_favorite_doctor?page=${page}`)
                    .then((res) => {
                        setData(res.results);
                        setCount(res.count)
                        const newarr=res.map(item => item.doctor.id)
                        setFilterdata(newarr)
                    })
                    .catch((err) => {
                        setError(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                }
                else{
                    axiosPrivate.get(`card/get_favorite_doctor`)
                    .then((res) => {
                        setData(res.results);
                        setCount(res.count)
                        console.log(res);
                        const newarr=res.map(item => item.doctor.id)
                        setFilterdata(newarr)
                        
                         
                     })
                    .catch((err) => {
                        setError(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                }
            }
        )()
    }, [add,page])

    return { data,filterdata, error, loading,setAdd,add,count }

}
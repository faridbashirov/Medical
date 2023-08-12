import { useEffect, useState } from "react"



import { axiosPrivate } from "../../api/api"

export default function favoritesDoctorsFetch(page){

    const [data,setData] = useState([])
    const [filterdata,setFilterdata] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [count,setCount] = useState("")
    const [add,setAdd] = useState(false)

    useEffect(() => {
        (
            async function(){
                setLoading(true)
                if(page){
                    axiosPrivate.get(`card/reviews_doctor?page=${page}`)
                    .then((res) => {
                        setData(res.results);
                        setCount(res.count)
                    })
                    .catch((err) => {
                        setError(err);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
                }
                else{
                    axiosPrivate.get(`card/reviews_doctor`)
                    .then((res) => {
                        console.log("here ",res);
                        setData(res.results);
                        setCount(res.count)
                       
                        
                         
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
    }, [page])

    return { data,filterdata, error, loading,setAdd,add,count }

}
// export default function profileDoctorReviews(token){

//     const [data,setData] = useState([])
//     const [error,setError] = useState(null)
//     const [loading,setLoading] = useState(false)
    

//     useEffect(() => {
//         (
//             async function(){
//                 try{
//                     setLoading(true)
//                     const response = await axios.get("https://hospitalbackend.efgroup.az/card/reviews_doctor",{
//                         headers: {
//                                   'Content-type': 'application/json',
//                                   "Authorization":`Bearer ${token}`
//                                 },
//                     })
//                     console.log(response.data)
                    
//                     setData(response.data)
//                 }catch(err){
//                     setError(err)
//                 }finally{
//                     setLoading(false)
//                 }
//             }
//         )()
//     }, [token])

//     return { data, error, loading }

// }
import { instance } from "../api";
import {useState,useEffect} from "react";

const useLanguageFetch = (url,lang) =>{
    let urlNew = "https://hospitalbackend.efgroup.az/"+`${lang === "ru" ? "" : lang + "/"}` + url
    const [data,setData] = useState(null);
    const  [loading,setLoading] = useState(false);
    const  [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const {data} = await instance.get(urlNew);
                setData(data);
            }
            catch(error){
                setError(error);
            }
            setLoading(false);
        }
        fetchData()
    },[urlNew,lang])
    return {data,loading,error}
}

export default useLanguageFetch
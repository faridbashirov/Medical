import React,{useState} from "react";
import { Pagination} from "antd";
import "./FavoriteHospitals.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import favoritesFetch from "../../../Components/api/favoriteHospitalsFetch";
import { useTranslation } from "react-i18next";
import { FadeLoader } from "react-spinners";
import HospitalCard from "./HospitalCard";

const FavoriteHospitals = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const {user,authToken}=useSelector(state=> state.auth)
  const [activeElement, setActiveElement] = useState(null);
  const [searchParams,setSearchParams] = useSearchParams()
  const [liked,setLiked]=useState(false)
  const handleClick = (elementId) => {
    setActiveElement(elementId);
  };

  const {data,setAdd,add,loading,count}=favoritesFetch(searchParams.get("page") || null)
  console.log(data,count, "salam-data");

  return (
    <div className="menuRight" style={{width:"100%"}}>
          <>
          {loading && !liked ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : 
            <div style={{width:"100%"}}>
              {data?.map((item)=>{
                  return <HospitalCard key={item?.id} hospital={item?.hospital} t={t} user={user}/>
              })}
        <div className={'review-doctors-pagination'}>
          {count ? <Pagination style={{textAlign:"center"}}
        current={parseInt(searchParams.get("page")) || 1}  pageSize={2} onChange={(page)=>{
         searchParams.set("page", page)
         
        setSearchParams(searchParams)

          }}  total={count}
       />  : <div style={{textAlign:"center"}}> {t("nothingfound")} </div>}
             </div>
            </div>
}
          </>
        </div>
  );
};

export default FavoriteHospitals;

import React, { useState } from 'react'
import DoctorsCard from './DoctorsCard'
import { FadeLoader } from 'react-spinners'
import { useNavigate, useSearchParams } from "react-router-dom";
import favoritesDoctorsFetch from "../../../Components/api/FavoriteDoctorsFetch";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';

const FavoriteDoctors = () => {
    const {t}=useTranslation()
  const navigate=useNavigate()
  const [liked, setLiked] = React.useState(true);
  const [section, setSection] = React.useState("profile");
  const [searchParams,setSearchParams]=useSearchParams()
  const {user,authToken}=useSelector(state=> state.auth)
  const [activeElement, setActiveElement] = useState(null);
  const {data,setAdd,add,count,loading}=favoritesDoctorsFetch(searchParams.get("page") || null)
  return (
    <>{
        loading && !add ?  <div> <FadeLoader
        color="black"
        className={"loading"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        /> </div> : 
        <>
        <div>
            {data.map((item)=>{
                return <DoctorsCard key={item?.id} doctor={item?.doctor} t={t} user={user} setAdd={setAdd} add={add} />
            })}
            <div className={'review-doctors-pagination'}>
            {count ? <Pagination
            current={parseInt(searchParams.get("page")) || 1}  pageSize={10} onChange={(page)=>{
            searchParams.set("page", page)
            setSearchParams(searchParams)
            }}  total={count}
    /> :  <div style={{textAlign:"center"}}> {t("nothingfound")} </div>}
            </div>
        </div>
    </>}</>
  )
}

export default FavoriteDoctors
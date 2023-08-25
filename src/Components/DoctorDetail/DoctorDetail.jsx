import React, {useEffect, useState} from 'react';
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import BreadCrumbs from './BreadCrumbs.jsx';
import "./DoctorDetail.css"

import DoctorCard from "./DoctorCard.jsx";
import DoctorBookingModal from "./DoctorBookingModal.jsx";
import DoctorInfo from "./DoctorInfo.jsx";
import FilterButtons from "../FilterButtons/index.js";
import DoctorDetailFetch from '../api/doctorDetail.js';
import { useParams } from 'react-router-dom';
import DoctorReviews from './Doctoreviews.jsx';
import i18next from 'i18next';


const DoctorDetail = () => {
  const [lang, setLang] = useState(i18next.language)
  const [openBooking, setOpenBooking] = useState(false)

  console.log('renderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
  const {id}=useParams()

  const {data,error,loading,review}=DoctorDetailFetch(id,i18next.language)

  console.log(localStorage.getItem("lang"));
  console.log(lang,' aaaaaaaaaaaaaaaaaaaa')

  
  i18next.on('languageChanged', () => {
    setLang(i18next.language)
  })


  console.log(i18next.language, 'actiualllllllllllll');



  const onOpenBookingModal = () => {
    console.log('1')
    setOpenBooking(true)
  }
  const onCloseBookingModal = () => {
    setOpenBooking(false)
  }
  if(error) {
    return <div>Something went wrong !!!</div>
  }
  return (
    <div style={{background: "#f6f6f6"}}>
     
      {/*breadcrumbs*/}
      <BreadCrumbs/>
      
      <DoctorCard doctor={data} onOpenBookingModal={onOpenBookingModal}/>
      <DoctorInfo  doctor={data}/>
      {/* <Reviews /> */}
      <DoctorReviews doctor={data} reviews={review} id={id}/>
      <Footer/>
      <DoctorBookingModal openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    </div>
  );
};

export default DoctorDetail;

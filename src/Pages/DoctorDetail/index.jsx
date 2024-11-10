import React, {useState} from 'react';
import BreadCrumbs from '../../Components/BreadCrumbs';
import "./DoctorDetail.css"
import DoctorCard from "./DoctorCard";
import DoctorBookingModal from "./DoctorBookingModal.jsx";
import DoctorInfo from "./DoctorInfo";
import DoctorDetailFetch from '../../Components/api/doctorDetail.js';
import { useParams } from 'react-router-dom';
import DoctorReviews from '../../Components/Reviews';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { FadeLoader } from 'react-spinners';


const DoctorDetail = () => {
  const {t} = useTranslation();
  const [lang, setLang] = useState(i18next.language)
  const [openBooking, setOpenBooking] = useState(false)
  const {id}=useParams()
  const {data,error,loading,review}=DoctorDetailFetch(id,i18next.language)
  i18next.on('languageChanged', () => {
    setLang(i18next.language)
  })
  console.log('data doctors:', data)
  const onOpenBookingModal = () => {
    setOpenBooking(true)
  }
  const onCloseBookingModal = () => {
    setOpenBooking(false)
  }
  if(loading){
    return <div className='doctor-detail-loading-area'> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div>
  }
  if(error) {
    return <div>Something went wrong !!!</div>
  }
  return (
    data ? 
      <section className='doctor-detail-section'>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${data.first_name} ${data.last_name}`}</title>
    </Helmet> 
    <div>
      <div className='container'>
        <BreadCrumbs pageItems={[
            {
              title: t("home"),
              href: "/",
            },
            {
              title: t("Doctors"),
              href: "/doctors"
            },
            {
              title: `Dr.${data?.first_name} ${data?.last_name}`,
              href: ""
            },
        ]}/>
      </div>
      <DoctorCard doctor={data} onOpenBookingModal={onOpenBookingModal}/>
      <DoctorInfo doctor={data}/>
      {/* <DoctorReviews doctor={data} reviews={review} id={id}/> */}
      <DoctorBookingModal openBooking={openBooking} onCloseBookingModal={onCloseBookingModal}/>
    </div>
    </section>
    : 
    <></>
  );
};

export default DoctorDetail;

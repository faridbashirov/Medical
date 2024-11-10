import React, { useState } from "react";
import peopleIcon from "../../assets/Svg/peopleIcon.svg";
import favDoctors from "../../assets/Svg/favDoctors.svg";
import favHospital from "../../assets/Svg/favHospital.svg";
import messageDoctor from "../../assets/Svg/messageDoc.svg";
import messageHospital from "../../assets/Svg/messageHos.svg";
import help112 from "../../assets/Svg/ambulans.svg";
import "./FavDoctors.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import FavoriteHospitals from './FavoriteHospitals'
import FavoriteDoctors from "./FavoriteDoctors";
import MyDoctorsReview from "./MyDoctorsReview";
import MyHospitalsReview from "./MyHospitalsReview";
import PersonalInformation from "./PersonalInformation";
import Help from "./Help";
import BreadCrumbs from "../../Components/BreadCrumbs";
import "./ProfileMenu.css"
const  Profile = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const [section, setSection] = React.useState("profile");
  const [activeElement, setActiveElement] = useState(null);
  const handleClick = (elementId) => {
    setActiveElement(elementId);
   
  };
  const renderSection = () => {
    switch (section) {
      case "profile":
        return <PersonalInformation />;
      case "favorite-doctors":
        return <FavoriteDoctors />;
      case "favorite-hospitals":
        return <FavoriteHospitals />;
      case "doctor-reviews":
        return <MyDoctorsReview />;
      case "hospital-reviews":
        return <MyHospitalsReview />;
      case "help":
        return <Help />;
      default:
        return <PersonalInformation />;
    }
  };
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
    <main className="fav-doctors-main">
      <div className='container'>
        <BreadCrumbs pageItems={[
            {
              title: t("home"),
              href: "/",
            },
            {
              title: t("Doctors"),
              href: ""
            }
        ]}/>
      </div>
      <div className="container">
        <div className="displayGridReviewDr doctorss">
          <div className="profile-menu">
            <ul>
              <li  onClick={() => setSection("profile")} className={section==="profile" ? "activeLi" : ""}>
                  <img src={peopleIcon} />
                  {t("profileinfo")}
              </li>
              <li onClick={()=> setSection("favorite-doctors")} className={section=="favorite-doctors" ? "activeLi" : ""}>
                <img src={favDoctors} />
                {t("favoritedoctor")}
              </li>
              <li onClick={()=> setSection("favorite-hospitals")} className={section==="favorite-hospitals" ? "activeLi" : ""}>
                <img src={favHospital} />
                {t("favoritehospital")}
              </li>
              {/* <li onClick={() => setSection("doctor-reviews")}  className={section==="doctor-reviews" ? "activeLi" : ""}>
                <img src={messageDoctor} />
                {t("commentdoctor")}
              </li>
              <li  onClick={() => setSection("hospital-reviews")}  className={section==="hospital-reviews" ? "activeLi" : ""}>
                <img src={messageHospital} />
                {t("commenthospital")}
              </li>
              <li onClick={() => setSection("help")}  className={section==="help" ? "activeLi" : ""}>
                <img src={help112} />
                {t("help")}
              </li> */}
            </ul>
          </div>
          <div className="menuRight">
            {renderSection()}
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Profile;

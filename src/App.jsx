import React,{useState} from "react";
import MobileLogin from "./Components/MobileLogin/MobileLogin";
import HomePage from "./Components/HomePage/HomePage";
import Profile from "./Components/Profile/Profile";
import { Routes,Route } from "react-router-dom";
import ReviewDoctors from "./Components/ReviewDoctors/ReviewDoctors";
import FavDoctors from "./Components/FavDoctors/FavDoctors";
import ReviewHospitals from "./Components/ReviewHospitals/ReviewHospitals";
import FavHospitals from "./Components/FavHospitals/FavHospitals";
import Hospitals from "./Components/Hospitals/Hospitals";
import Doctors from "./Components/Doctors/Doctors";
import HospitalsReviewsAll from './Components/HospitalReviewsAll/HospitalsReviewsAll'
import DoctorsReviewsAll from "./Components/DoctorsReviewsAll/DoctorsReviewsAll";
import FAQ from "./Components/FAQ/FAQ";
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import ContactUs from "./Components/ContactUs/ContactUs";
import Slider from "./Components/Slider";
import HospitalDetail from "./Components/HospitalDetail";
import DoctorDetail from "./Components/DoctorDetail/index.js";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/index.js";
import './main.css'



const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <main className={`${showMenu && 'overflowHidden'} `}>
       {/* <MobileLogin />  */}
       <Routes>
         <Route element={<Header handleMenu={handleMenu} showMenu={showMenu}/>}>
           <Route path="Medical-marketplace/" element={<HomePage handleMenu={handleMenu} showMenu={showMenu} setShowMenu={setShowMenu}/>}/>
         <Route path="Medical-marketplace/profile" element={ <Profile/>}/>
    <Route path="Medical-marketplace/profile/doctor-reviews" element={<ReviewDoctors/>}/>
    <Route path="Medical-marketplace/profile/hospital-reviewa" element={ <ReviewHospitals/>}/>
    <Route path="Medical-marketplace/fav-doctors" element={ <FavDoctors/>}/>
    <Route path="Medical-marketplace/fav-hospitals" element={<FavHospitals />}/>
    <Route path="Medical-marketplace/hospitals" element={<Hospitals/>}/>
    <Route path="Medical-marketplace/doctors" element={<Doctors/>}/>
    <Route path="Medical-marketplace/hospital-reviews" element={<HospitalsReviewsAll/>}/>
    <Route path="Medical-marketplace/hospital-detail" element={<HospitalDetail/>}/>
    <Route path="Medical-marketplace/doctor-detail" element={<DoctorDetail/>}/>
      <Route path="Medical-marketplace/doctor-reviews" element={<DoctorsReviewsAll/>}/>
   <Route path="Medical-marketplace/faq" element={ <FAQ/>}/>
      <Route path="Medical-marketplace/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="Medical-marketplace/about-us" element={ < AboutUs/> }/>
      </Route>
      </Routes>

      {/* <Slider/> */}
    </main>
  );
};

export default App;

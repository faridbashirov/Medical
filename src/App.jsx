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
           <Route path="/" element={<HomePage handleMenu={handleMenu} showMenu={showMenu} setShowMenu={setShowMenu}/>}/>
         <Route path="profile" element={ <Profile/>}/>
    <Route path="/profile/doctor-reviews" element={<ReviewDoctors/>}/>
    <Route path="/profile/hospital-reviewa" element={ <ReviewHospitals/>}/>
    <Route path="/fav-doctors" element={ <FavDoctors/>}/>
    <Route path="/fav-hospitals" element={<FavHospitals />}/>
    <Route path="/hospitals" element={<Hospitals/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/hospital-reviews" element={<HospitalsReviewsAll/>}/>
    <Route path="/hospital-detail" element={<HospitalDetail/>}/>
    <Route path="/doctor-detail" element={<DoctorDetail/>}/>
      <Route path="/doctor-reviews" element={<DoctorsReviewsAll/>}/>
   <Route path="/faq" element={ <FAQ/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/about-us" element={ < AboutUs/> }/>
      <Route path="*" element={ < AboutUs/> }/>
      </Route>
      </Routes>

      {/* <Slider/> */}
    </main>
  );
};

export default App;

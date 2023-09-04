import React,{useState,useEffect} from "react";
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
import PrivateRoute from "./Components/utils/PrivateRoute";
import './main.css'
import { useSelector,useDispatch } from "react-redux";
import { fetchHospitals } from "./store/thunk/hospitalsThunk";
import { authToken } from "./store/reducers/userReducer";
import { tokenRefresh } from "./store/thunk/tokenRefresh";
import i18next from "i18next";

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const {authToken} = useSelector((state) => state.auth)
  // const dispatch=useDispatch()
  // console.log(authToken?.refresh);
  // useEffect(()=>{
  
  //     var fiveminutes=1000 * 60 * 2
  //     let interval= setInterval(()=>{
  //       if(authToken){
  //         dispatch(tokenRefresh(authToken.refresh));
  //         console.log("++++refresh complete");
    
  //       }

  //     },fiveminutes)
  //     return ()=> clearInterval(interval)
     

    
    
   

  // },[authToken])
 

 
  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  
  
  return (
    <>
   
    <main className={`${showMenu && 'overflowHidden'} `}>
       {/* <MobileLogin />  */}
       <Routes>
         <Route element={<Header setShowMenu={setShowMenu}  handleMenu={handleMenu} showMenu={showMenu}/>}>
           <Route  path="/" element={<HomePage handleMenu={handleMenu} showMenu={showMenu} setShowMenu={setShowMenu}/>}/>
         <Route element={<PrivateRoute/>}>
    <Route path="profile" element={ <Profile/>}/>
    <Route path="profile/doctor-reviews" element={<ReviewDoctors/>}/>
    <Route path="profile/hospital-reviews" element={ <ReviewHospitals/>}/>
    <Route path="profile/fav-doctors" element={ <FavDoctors/>}/>
    <Route path="profile/fav-hospitals" element={<FavHospitals />}/>
         </Route>
    
    <Route path="/hospital-reviews/:id" element={<HospitalsReviewsAll/>}/>
    <Route path="/hospitals" element={<Hospitals/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/hospital/:id" element={<HospitalDetail/>}/>
    <Route path="/doctor/:id" element={<DoctorDetail/>}/>
    <Route path="/doctor-reviews/:id" element={<DoctorsReviewsAll/>}/>
    <Route path="/faq" element={ <FAQ/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route path="/about-us" element={ < AboutUs/> }/>
    <Route path="/contact-us" element={ <ContactUs/>}/>
    
    <Route path="*" element={ < AboutUs/> }/>
    </Route>
    </Routes>

      {/* <Slider/> */}
    </main>
     </>
  );
};

export default App;

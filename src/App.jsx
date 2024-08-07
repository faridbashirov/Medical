import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
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
import FAQ from "./Components/FAQ";
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import ContactUs from "./Components/ContactUs/ContactUs";
import HospitalDetail from "./Components/HospitalDetail";
import DoctorDetail from "./Components/DoctorDetail/index.js";
import AboutUs from "./Components/AboutUsNew";
import PrivateRoute from "./Components/utils/PrivateRoute";
import './main.css'
import { register } from 'swiper/element/bundle';
import Footer from "./Components/Footer";
register();

const App = () => {
  
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
 
  return (
    <>
   
    {/* <main className={`${showMenu && 'overflowHidden'} `}>
       <Routes>
         <Route element={<Header setShowMenu={setShowMenu}  handleMenu={handleMenu} showMenu={showMenu}/>}>
           <Route  path="/" element={<HomePage handleMenu={handleMenu} showMenu={showMenu} setShowMenu={setShowMenu}/>}/>
         <Route element={<PrivateRoute/>}>
    <Route path="profile" element={ <Profile/>}/>
    <Route path="profile/doctor-reviews" element={<ReviewDoctors/>}/>
    <Route path="profile/hospital-reviews" element={ <ReviewHospitals/>}/>
    <Route path="profile/fav-doctors" element={ <FavDoctors/>}/>
    <Route path="profile/fav-hospitals" element={<FavHospitals />}/></Route>
    
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
    </main> */}
    <Header/>
     <Routes>
      <Route element={<PrivateRoute/>}/>
      <Route  path="/" element={<HomePage/>}/>
      <Route path="profile" element={ <Profile/>}/>
      <Route path="profile/doctor-reviews" element={<ReviewDoctors/>}/>
      <Route path="profile/hospital-reviews" element={ <ReviewHospitals/>}/>
      <Route path="profile/fav-doctors" element={ <FavDoctors/>}/>
      <Route path="profile/fav-hospitals" element={<FavHospitals />}/>
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
      <Route path="*" element={<HomePage/>}/>
    </Routes>
    <Footer/>
     </>
  );
};

export default App;
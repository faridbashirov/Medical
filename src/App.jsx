import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Profile from "./Pages/Profile";
import { Routes,Route } from "react-router-dom";
import Hospitals from "./Pages/Hospitals";
import HospitalsReviewsAll from './Components/HospitalReviewsAll/HospitalsReviewsAll'
import HospitalDetail from "./Components/HospitalDetail";
import PrivateRoute from "./Components/utils/PrivateRoute";
import Doctors from "./Pages/Doctors";
import DoctorsReviewsAll from "./Pages/DoctorsReviewsAll/DoctorsReviewsAll";
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import DoctorDetail from "./Pages/DoctorDetail";
import FAQ from "./Pages/FAQ";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
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
      <Route path="/hospital-reviews/:id" element={<HospitalsReviewsAll/>}/>
      <Route path="/hospitals" element={<Hospitals/>}/>
      <Route path="/hospital/:id" element={<HospitalDetail/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
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
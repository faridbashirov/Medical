import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Profile from "./Pages/Profile";
import Hospitals from "./Pages/Hospitals";
import HospitalsReviewsAll from './Components/HospitalReviewsAll/HospitalsReviewsAll';
import HospitalDetail from "./Components/HospitalDetail";
import PrivateRoute from "./Components/utils/PrivateRoute";
import Doctors from "./Pages/Doctors";
import DoctorsReviewsAll from "./Pages/DoctorsReviewsAll/DoctorsReviewsAll";
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import DoctorDetail from "./Pages/DoctorDetail";
import FAQ from "./Pages/FAQ";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Loading from './Pages/Loading';
import './main.css';
import { register } from 'swiper/element/bundle';
import { useSelector } from "react-redux";
import Cookies from './Pages/Cookies';
register();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {user,authToken}=useSelector(state=> state.auth)
  const navigate = useNavigate();
  const location = useLocation();
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
  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
    };
    
    loadData();
    const validRoutes = ['/', user ? '/profile' : null, '/hospitals', '/hospital-reviews/:id', '/hospital/:id', '/doctors', '/doctor-reviews/:id', '/doctor/:id', '/faq', '/privacy-policy', '/terms','/cookies','/about-us', '/contact-us'].filter(Boolean);
    const pathExists = validRoutes.some(route => {
      const pattern = new RegExp(`^${route.replace(/:\w+/g, '\\d+')}$`);
      return pattern.test(location.pathname);
    });

    if (!pathExists) {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    // isLoading ? 
    // <Loading /> 
    // :
    <>
      <Header />
        <Routes>
          <Route element={<PrivateRoute />} />
          <Route path="/" element={<HomePage />} />
          {user && <Route path="profile" element={<Profile />} />}
          <Route path="/hospital-reviews/:id" element={<HospitalsReviewsAll />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospital/:id" element={<HospitalDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/doctor-reviews/:id" element={<DoctorsReviewsAll />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<Cookies/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;

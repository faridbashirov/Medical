import Country from "./Country";
import MedicalServiceDiscount from "./MedicalServiceDiscount";
import SpecialOffers from "./SpecialOffers";
import "../HomePage/HomePage.css";
import BestSeller from "./BestSeller";
import TopClinic from "./TopClinic";
import DoctorSearch from "./DoctorSearch";
import HomeReviews from "./HomeReviews";
import YouWillLikeThis from "./YouWillLikeThis";
import BestOffers from "./BestOffers";
import Search from "./Search";
import CategoryArea from "./CategoryArea";
import {Helmet} from "react-helmet";

const HomePage = () => {
  
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
      <Search/>
      <CategoryArea/>
      <BestOffers/>
      {/* <YouWillLikeThis/> */}
      <BestSeller/>
      <Country/>
      <MedicalServiceDiscount/>
      <SpecialOffers/>
      <TopClinic/>
      <DoctorSearch/>
      {/* <HomeReviews/> */}
    </>
  );
};

export default HomePage;

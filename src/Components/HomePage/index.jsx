import Sliders from "./Slider";
import SliderSecond from "./SliderSecond";
import SliderThird from "./SliderThird";
import "../HomePage/HomePage.css";
import DiscoundSlider from "./DiscoundSlider";
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
      <DiscoundSlider/>
      <Sliders/>
      <SliderSecond/>
      <SliderThird/>
      <TopClinic/>
      <DoctorSearch/>
      <HomeReviews/>
    </>
  );
};

export default HomePage;

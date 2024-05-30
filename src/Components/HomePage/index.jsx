import Sliders from "./Slider";
import SliderSecond from "./SliderSecond";
import SliderThird from "./SliderThird";
import "../HomePage/HomePage.css";
import Footer from "../Footer/index.js";
import DiscoundSlider from "./DiscoundSlider";
import TopClinic from "./TopClinic";
import DoctorSearch from "./DoctorSearch";
import HomeReviews from "./HomeReviews";
import YouWillLikeThis from "./YouWillLikeThis";
import BestOffers from "./BestOffers";
import Search from "./Search";
import CategoryArea from "./CategoryArea";

const HomePage = () => {
  
  return (
    <>
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
      <Footer/>
    </>
  );
};

export default HomePage;

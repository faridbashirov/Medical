import React from "react";
import "../CardsSecond/CardsSecond.css";
import { useNavigate } from "react-router-dom";


const CardsSecond = ({ position,discount }) => {
  const navigate = useNavigate();
  return (
  <div className="cardSecond trans" onClick={()=> navigate({
    pathname:"/doctors",
    search: `?type=doctor&position=${position}`
  })}>
    <p className="cardsSecond-position">{position}</p>
    <p className="cardsSecond-discount">-{discount}%</p>
  </div>)
};

export default CardsSecond;
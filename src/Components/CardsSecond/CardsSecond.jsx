import React from "react";
import "../CardsSecond/CardsSecond.css";


const CardsSecond = ({ position,discount }) => (
  <div className="cardSecond trans">
    <p className="cardsSecond-position">{position}</p>
    <p className="cardsSecond-discount">{discount}</p>
  </div>
);

export default CardsSecond;
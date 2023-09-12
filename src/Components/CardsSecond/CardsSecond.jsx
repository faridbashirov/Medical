import React from "react";
import "../CardsSecond/CardsSecond.css";


const CardsSecond = ({ p,p2 }) => (
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}} className="cardSecond">
    <p style={{fontSize:"26px",fontWeight:"600"}}>{p}</p>
    <p style={{fontSize:"20px",color:"#5282FF"}}>{p2}</p>
  </div>
);

export default CardsSecond;
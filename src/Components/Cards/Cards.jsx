import React from "react";
import "../Cards/Cards.css";
import { useNavigate } from "react-router-dom";
const Cards = ({ img,title }) => {
   
  const navigate=useNavigate()
  return (
  
  <div  onClick={()=> navigate({
    pathname: "/hospitals",
    search: `?type=clinic&country=${title}`,
  })} style={{ borderRadius: "12px" }} className="card">
    <img  src={img} />
  </div>
  )
  };

export default Cards;

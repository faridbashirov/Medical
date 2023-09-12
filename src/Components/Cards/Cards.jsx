import React from "react";
import "../Cards/Cards.css";
import rectangle from "../../assets/Images/Rectangle-103.png";
import { useNavigate } from "react-router-dom";
import { EnvironmentOutlined} from "@ant-design/icons"
const Cards = ({ img,title,flag }) => {
   
  const navigate=useNavigate()
  return (
  
  <div  onClick={()=> navigate({
    pathname: "/hospitals",
    search: `?type=clinic&country=${title}`,
  })} style={{ borderRadius: "12px",background:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative" }} className="card">
    {/* <img  src={img} /> */}
    <img src={flag} className="flag-card" style={{position:"absolute",left:"20px",top:"20px"}}/>
    <img src={rectangle} className="shadow-card" style={{width:"100%",position:"absolute",bottom:"0"}}/>
    <span className="card-title-country"><EnvironmentOutlined/> {title}</span>

  </div>
  )
  };

export default Cards;

import React from "react";
import {Pagination,Rate } from "antd";
import { FadeLoader } from "react-spinners";
import "./MyHospitalsReview.css";
import profileHospitalReviews from "../../../Components/api/profileHospitalReviews";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ReviewHospitals = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const [searchParams,setSearchParams] =useSearchParams()
  const {data,error,count,loading}=profileHospitalReviews(searchParams.get("page" || null))
  return (
    <>{
              loading  ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : 
           
            <div>
              {  data.map((item,index)=>{
                return  <div key={index} className="cardHospitals">
                <div className="card-head display_grid-hospital">
                  <img style={{height:"166px"}} id="hospitalImage" src={item.hospital?.main_image} />
                </div>
                <div
                  className="card-body"
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between",alignItems:"flex-start",paddingTop:"10px" }}
                  >
                    <div>
                    <Rate style={{fontSize:"16"}} disabled={true} value={item.hospital?.raiting}/>
              </div>
                    <p className="comment-average"
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",padding:"5px 10px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius: "2.5px",
                        textAlign: "center",
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <p>
                   {item.text}
                  </p>
                  <div className="hospital-footerr"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span onClick={()=> navigate(`/hospital/${item.hospital.id}`)}  style={{ color: "#5282FF", fontSize: "11.15px",cursor:"pointer" }}>
                        {item.hospital?.name}
                      </span>
                    </p>
                    <p style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              })}
              <div className={'review-doctors-pagination'}>
              {count ? <Pagination
        current={parseInt(searchParams.get("page")) || 1}  pageSize={10} onChange={(page)=>{
         searchParams.set("page", page)
        setSearchParams(searchParams)

       }}  total={count}
        
       />  : <div style={{textAlign:"center"}}> {t("nothingfound")}</div>}
              </div>
            </div>
}
</>
  );
};

export default ReviewHospitals;

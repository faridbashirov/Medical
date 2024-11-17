import React from "react";
import {Pagination,Rate } from "antd";
import "./MyDoctorsReview.css";
import { useSelector } from "react-redux";
import profileDoctorReviews from "../../../Components/api/profileDoctorReviews";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FadeLoader } from "react-spinners";

const  MyDoctorsReview = () => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const [searchParams,setSearchParams] = useSearchParams()

  const {user,authToken}=useSelector(state=> state.auth)
  const {data,error,count,loading}=profileDoctorReviews(searchParams.get("page") || null)
  if(error) {
    return <div>Page Not Found</div>
  }
  return (
    <>{
              loading  ?  <div> <FadeLoader
              color="black"
              className={"loading"}
              loading={true}
              // style={{top:"50px"}}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> </div> : 
            
            
            <div>
              {  data.map((item,index)=>{
                return  <div className="cardReviewDoctors-main">
                <div className="card-head display_grid">
                  <img id="doctorImage"  src={item.doctor?.profile_photo}/>
                  
                </div>
                <div className="card-body">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                      <div>
                      <Rate style={{fontSize:"14"}} disabled={true} value={item.doctor?.raiting}/>
              </div>
                    <p className="comment-average"
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",
                        // width: "29.16px",
                        padding:"5px 10px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        // height: "21.53px",
                        borderRadius: "2.5px",
                        textAlign: "center",
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <div>
                    <h3
                      className={"card-title changed"}
                    >
                     
                    </h3>
                    <p
                      className={"card-text changed"}
                    >
                      {item.text}
                    </p>
                  </div>
                  <div
                   className="card-footerr" style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p  className="changed" style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span onClick={()=> navigate(`/doctor/${item.doctor.id}`)} className="changed" style={{ color: "#5282FF", fontSize: "11.15px",cursor:"pointer" }}>
                        Dr. {item.doctor?.first_name}
                      </span>
                    </p>
                    <p className="changed" style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              }) }
             
             
              <div className={'review-doctors-pagination'}
              >
                  {count ? <Pagination
        current={parseInt(searchParams.get("page")) || 1}  pageSize={10} onChange={(page)=>{
         searchParams.set("page", page)
         // const newSearch = `?${searchParams.toString()}`;
        setSearchParams(searchParams)

       }}  total={count}
        
       /> : <div style={{textAlign:"center"}}> {t("nothingfound")}</div>}
              </div>
            </div>
}
            </>
  );
};

export default MyDoctorsReview;

import React from 'react';
import DrReviewAll from "../../assets/Images/DrRwAll.png";
import Iconstars from "../../assets/Svg/starIcon.svg";
import {EnvironmentOutlined} from "@ant-design/icons";
import experience from "../../assets/Svg/staj.svg";
import {Button, Input, Space} from "antd";
import DrFB from "../../assets/Svg/DrFB.svg";
import DrVK from "../../assets/Svg/DrVK.svg";
import DrLn from "../../assets/Svg/DrLn.svg";
import { useTranslation } from 'react-i18next';

const DoctorCard = ({onOpenBookingModal,doctor}) => {
  const {t}=useTranslation()

  return (
    <section className={"container"}>
      <div
        className="doc-card"
      >
        <div className="doc-card-body-wrapper">
          <div className="doc-card-img-wrapper">
            <img
              className="doc-card-img"
              src={doctor.profile_photo}
            />
          </div>
          <div className="doc-card-body">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "10px",
                height: "30px",
              }}
            >
              <div>
                {" "}
                <p
                  style={{
                    margin: "0 15px 0 0",
                    paddingTop: "0px !important",
                  }}
                >
                  {doctor.position?.name}
                </p>
              </div>
              <div style={{marginRight: "auto"}}>

                <img src={Iconstars}/>
              </div>
              <div className={"doc-card-ratings"}>
                <p
                  style={{
                    margin: "0 !important",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Bеликолепно{" "}
                </p>
              </div>
              <div className={"doc-card-ratings"}>
                <p
                  style={{
                    backgroundColor: "#5282FF",
                    color: "white",
                    width: "30px",
                    height: "24.71px",
                    borderRadius: "4.41px",
                    margin: "0 0 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  9.0
                </p>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    color: "#000",
                    fontSize: "24px !important",
                    margin: "0px",
                    paddingTop: "10px",
                  }}
                >
                  Dr. {doctor.first_name} {doctor.last_name}
                </h3>
              </div>

              <p
                style={{
                  color: "#5282FF",
                  fontSize: "14px",
                  margin: "0px",
                  paddingTop: "10px",
                  marginTop: "19px"
                }}
              >
                <EnvironmentOutlined
                  style={{marginRight: "6px", color: "#5282FF"}}
                />
               {doctor.hospital_name}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <p className='doc-button1'
                    style={{
                      color: "#000",
                      backgroundColor: "#F4F4F4",
                      border: "1px solid #EFEFEF",
                      borderRadius: "15px",
                      fontSize: "12px",
                      padding: "10px 10px",
                      width: "max-content",
                      textAlign: "center",
                    }}
                  >
                        {doctor.position?.name}
                  </p>
                 
                      {doctor.experience ? <> <p className='doc-button2'
                    style={{
                      color: "#000",
                      backgroundColor: "#F4F4F4",
                      border: "1px solid #EFEFEF",
                      borderRadius: "15px",
                      fontSize: "12px",
                      padding: "10px 10px",
                      width: "max-content",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "19px"
                    }}
                  > <img src={experience}/>
                  
                  {doctor.experience} {t("experienceyear")} </p></>: ""}
                   
                
                  <div className={"doc-card-btns"} style={{marginTop: "20px"}}>
                    <Button
                      style={{
                        color: "#FFF",
                        backgroundColor: "#5282FF",
                        borderRadius: "5.55728px",
                        width: "151.16px",
                        height: "48.9px",
                        marginRight: "15px",
                      }}
                      onClick={onOpenBookingModal}
                      type="primary"
                    >
                      {t("onlinebooking")}
                    </Button>
                  
                  </div>
                </div>
                <div className="socialIconDr"
                     style={{backgroundColor: "#F0F0F0", width: "160px", height: "48px", textAlign: "center"}}>
                  <img style={{paddingTop: "13px", marginRight: "10px"}} src={DrFB}/>
                  <img style={{marginRight: "10px"}} src={DrVK}/>
                  <img src={DrLn}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"doc-card-btns-mobile"} style={{marginTop: "20px"}}>
          <Button
            className={"doc-card-btn-1"}
            onClick={onOpenBookingModal}
            type="primary"
          >
            {t("onlinebooking")}
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default DoctorCard;

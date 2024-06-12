import React,{useEffect, useState}  from "react";
import { Controller } from 'react-hook-form';
import {
  Dropdown,
  Button,
  Space,
  Breadcrumb,
  Col,
  Row,
  Form,
  Input,
} from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import { useForm } from "react-hook-form";
import "../ContactUs/ContactUs.css";
import { contactFetch } from "../api/contactFetch";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactInfoFetch from "../api/getContactInfo";
import { ToastContainer,toast  } from "react-toastify";
import newMap from "../../assets/Images/GoogleMapTA 3.png";
import { Helmet } from "react-helmet";

const items = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        USD
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={USD}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        EUR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={EUO}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        GBP
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={POU}
      />
    ),
  },
];

const itemsFlag = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        AZ
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={azFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        TR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={trFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        EN
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={absFlag}
      />
    ),
  },
];

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
};

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const ContactUs = () => {
  const {t}=useTranslation()
  const schema = Yup.object().shape({
    first_name: Yup.string()
        
        .trim()
        .required(t("nameerror"))
        ,
    last_name:Yup.string()
    
    .trim()
    .required(t("lastnameerror"))
     ,
    
    email:Yup.string()
    
    .email(t("validemail"))
    .trim()
    .required(t("emailerror"))
    
    .max(64),
    text:Yup.string()
  
    .trim()
    .required(t("messageerror"))
    .min(3,t("length"))
    .max(64),
   
   
   
   
   
      })
  const {control,reset, handleSubmit,formState: { errors } } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  );;
  const [error,setError] = useState({})
  const formRef = React.createRef();
  
  const {data1,error1,loading1}=ContactInfoFetch()

  const handleRegistration = async(values) => {
    console.log(values);

    const data = await contactFetch(values)

    if(data.Errors){
      console.log("error");
            setError(data.Errors)
            
          }
    if(data.message){
      console.log("success");
      reset()
      toast(t("messagesuc"))
      
                  setError({})
                  
                
      
  }
}
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
    </Helmet>
     
    <div style={{ backgroundColor: "#F4F4F4" }}>
      
      <div style={{ paddingTop: "30px" }} className="container">
        <div
          style={{
            borderBottom: "1px solid #E7E7E7",
            padding: "20px 0",
            marginBottom: "30px",
          }}
        >
          <Breadcrumb
            separator={
              <span
                style={{
                  color: "#5282FF",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                {" "}
                {">"}{" "}
              </span>
            }
            items={[
              {
                title: t("home"),
                href: "/",
              },
              {
                title: t("contact"),
              },
            ]}
          />
        </div>
        <div className="ContacUs_Grid">
          <div className="mailContactUs">
            <p
              style={{ color: "#5282FF", fontSize: "20px", margin: "0 0 10px" }}
            >
              {t("contact-us")}
            </p>
            <p style={{ color: "#5F5F5F", fontSize: "16px", margin: "0" }}>
            {t("profileinfo2")}
            </p>
            <hr
              style={{
                border: "1px solid #E7E7E7",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
            <Form  name="form_item_path" layout="vertical"  onFinish={handleSubmit(handleRegistration)}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <MyFormItem name="first_name" label= {t("name")}>
                      <Controller
             rules={{
              required: "This field is required",
            }}
            name="first_name"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder="First Name *"  />
            )}
          />
                      </MyFormItem>
                      <p style={{color:'red'}}>   {errors?.first_name && errors.first_name.message}</p>
        {error.first_name ? <div
        style={{
          
          width: '100%',
        }}>{error.first_name}</div> : ""}
                    </Col>
                    <Col span={12}>
                      <MyFormItem name="last_name" label={t("surname")}>
                      <Controller
             rules={{
              required: "This field is required",
            }}
            name="last_name"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder="Last Name *"  />
            )}
          />
                      </MyFormItem>

                      <p style={{color:'red'}}>   {errors?.last_name && errors.last_name.message}</p>
        {error.last_name ? <div style={{
          
          width: '100%',
          
          
        }}>{error.first_name}</div> : ""}
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <MyFormItem name="email" label={t("mailadress")}>
                      <Controller
             rules={{
              required: "This field is required",
            }}
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} type="email" className="input" placeholder="Email"  />
            )}
          />
                      </MyFormItem>
                      <p style={{color:'red'}}>   {error.email ? <span>{error.email}</span> : ""}</p>
                      <p style={{color:'red'}}>   {errors?.email && errors.email.message}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item name="text" label={t("note")}>
                      <Controller
             rules={{
              required: "This field is required",
            }}
            name="text"
            control={control}
            render={({ field }) => (
              <Input.TextArea {...field} className="input"  placeholder="Message"  />
            )}
          />
                      </Form.Item>
                      <p style={{color:'red'}}>    {errors?.text && errors.text.message}</p>
                    </Col>
                  </Row>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <Button
                style={{
                  backgroundColor: "#5282FF",
                  color: "white",
                  width: "100%",
                  height: "61px",
                  fontSize: "20px",
                }}
                type="primary"
                htmlType="submit"
              >
               {t("sendmessage")}
              </Button>
            </Form>
          </div>
          <div
            className={"faq-contact"}
          >
            <p style={{ color: "#FFF", fontSize: "24px" }}>{t("help")}</p>
            <hr style={{ marginBottom: "50px" }} />
            <p style={{ color: "#FFF" }}>{data1.number}</p>
            <p style={{ color: "#FFF" }}>{data1.number_second} </p>
            <p style={{ color: "#FFF" }}>{data1.email}</p>

            <div
              style={{
                marginTop: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "24.66px", height: "24.66px" }}
                src={facebook}
              />
              <img
                style={{
                  width: "34.66px",
                  height: "34.66px",
                  margin: "0px 12px",
                }}
                src={vk}
              />
              <img
                style={{ width: "24.66px", height: "24.66px" }}
                src={instagram}
              />
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "409px",backgroundColor:"#FBFBFB",padding:"40px",marginBottom:"20px" }}>
          <iframe
            style={{ border: "none" }}
            src={newMap}
            width="100%"
            height="323"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactUs;

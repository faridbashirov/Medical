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
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import mailIcon from "../../assets/Svg/mailIcon.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";

import { ArrowRightOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import "../ContactUs/ContactUs.css";
import { contactFetch } from "../api/contactFetch";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import { useTranslation } from "react-i18next";

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
  const {control,reset, handleSubmit,formState: { errors } } = useForm();
  const [error,setError] = useState({})
  const formRef = React.createRef();


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
      alert("Message sent!");
      
                  setError({})
                  
                
      
  }
}
  const onFinish = (value) => {
    console.log(value);
  };
  return (
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
                      {errors?.first_name && errors.first_name.message}
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

                      {errors?.last_name && errors.last_name.message}
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
                      {error.email ? <span>{error.email}</span> : ""}
                      {errors?.email && errors.email.message}
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
                      {errors?.text && errors.text.message}
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
            <p style={{ color: "#FFF", fontSize: "24px" }}>{t("help2")}</p>
            <hr style={{ marginBottom: "50px" }} />
            <p style={{ color: "#FFF" }}>+994 000 00 00 </p>
            <p style={{ color: "#FFF" }}>+994 000 00 00 </p>
            <p style={{ color: "#FFF" }}>info@112med.com</p>

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17439.59682519633!2d49.97557041806164!3d40.39300414904405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063737e96e061%3A0x5b925e8db0b28d35!2sBaku%20Medical%20Plaza!5e0!3m2!1sen!2saz!4v1682591396345!5m2!1sen!2saz"
            width="100%"
            height="323"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default ContactUs;

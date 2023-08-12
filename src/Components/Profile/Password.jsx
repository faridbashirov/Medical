import React, { useState,useEffect } from "react";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import peopleIcon from "../../assets/Svg/peopleIcon.svg";
import favDoctors from "../../assets/Svg/favDoctors.svg";
import favHospital from "../../assets/Svg/favHospital.svg";
import messageDoctor from "../../assets/Svg/messageDoc.svg";
import messageHospital from "../../assets/Svg/messageHos.svg";
import help112 from "../../assets/Svg/ambulans.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import mailIcon from "../../assets/Svg/mailIcon.svg";
import passwordIcon from "../../assets/Svg/passwordIcon.svg";
import { useNavigate } from "react-router-dom";
import "../Profile/Profile.css";
import getUserFetch from "../api/getUser";
import { resetPassword } from "../api/resetPassword";
import { useTranslation } from "react-i18next";
import {
  Button,
  Dropdown,
  Space,
  Breadcrumb,
  Col,
  Row,
  Form,
  Input,
  DatePicker,
  Select,
  
} from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};


const items = [
  {
    key: '1',
    label: `Клиники`,
    children: "",
  },
  {
    key: '2',
    label: `Врачи`,
    children: "",
  },
];


// const items = [
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         USD
//       </span>
//     ),
//     key: "1",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={USD}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         EUR
//       </span>
//     ),
//     key: "2",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={EUO}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         {" "}
//         GBP
//       </span>
//     ),
//     key: "3",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={POU}
//       />
//     ),
//   },
// ];

// const itemsFlag = [
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         AZ
//       </span>
//     ),
//     key: "1",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={azFlag}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         TR
//       </span>
//     ),
//     key: "2",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={trFlag}
//       />
//     ),
//   },
//   {
//     label: (
//       <span
//         style={{
//           fontFamily: "Gilroy",
//           fontSize: "16px",
//           fontWeight: "600",
//           color: "black",
//           paddingLeft: "10px",
//         }}
//       >
//         {" "}
//         EN
//       </span>
//     ),
//     key: "3",
//     icon: (
//       <img
//         style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
//         src={absFlag}
//       />
//     ),
//   },
// ];

// const menuProps = {
//   items,
//   onClick: handleMenuClick,
// };
// const menuPropsFlag = {
//   items: itemsFlag,
//   onClick: handleMenuFlagClick,
// };

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
// const MyFormItemGroup = ({ prefix, children }) => {
//   const prefixPath = React.useContext(MyFormItemContext);
//   const concatPath = React.useMemo(
//     () => [...prefixPath, ...toArr(prefix)],
//     [prefixPath, prefix]
//   );
//   return (
//     <MyFormItemContext.Provider value={concatPath}>
//       {children}
//     </MyFormItemContext.Provider>
//   );
// };
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item  name={concatName} {...props} />;
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Password = () => {
  const {t}=useTranslation()

    const [password,setPassword]=useState("")
    const [oldpassword,setoldPassword]=useState("")
    const [password2,setPassword2]=useState("")
    const [active,setActive] = useState(true)
    const [error,setError]=useState({})

    const handlechange =(e)=>{
        setError({})
       console.log(e.target.name);
        if(e.target.name === "oldpassword"){
            setoldPassword(e.target.value);
        }
        if(e.target.name === "password"){
            console.log(e.target.value)
            setPassword(e.target.value)
         
            console.log("here");
        }
        if(e.target.name === "password2"){
            setPassword2(e.target.value)
            console.log("here");
        }
        
    }
  

  const navigate=useNavigate()
  const onFinish = async(value) => {
    console.log(value);
    if(oldpassword.trim().length === 0){
        setError((prev) => ({
            ...prev,
            ["oldpassword"]: "Please enter yout password"
          }))
          setActive(true)

  }else{
    setError((prev) => ({
        ...prev,
        ["oldpassword"]: ""
      }))

  }
  if(password.trim().length === 0){
    setError((prev) => ({
        ...prev,
        ["password"]: "Please enter new password"
      }))
      setActive(true)

}else{
setError((prev) => ({
    ...prev,
    ["oldpassword"]: ""
  }))
  if( password?.trim().length < 8){
    setError((prev) => ({
        ...prev,
        ["password2"]: "Password is short !"
      }))
      setActive(true)
    
  }  
  if(password !== password2){
    setError((prev) => ({
        ...prev,
        ["password"]: "Passwords did not match !"
      }))
      setActive(true)
 


}else{
    setError((prev) => ({
        ...prev,
        ["password"]: ""
      }))
    
}

if(Object.keys(error).length === 0){
    const data=await resetPassword(value)
   if(data?.Errors){
    setError((prev) => ({
        ...prev,
        ["oldpassword"]: "Wrong Password !"
      }))
      
   }
   else{
    alert("Your password is updated!")
   }
}
  

}
   

}

  useEffect(()=>{
    console.log( password.trim() === "", oldpassword.trim() === "",  password2.trim() === "");
 
  
    if(
        password.trim() === ""&&
        oldpassword.trim() === "" &&
        password2.trim() === ""
   
    ){
     setActive(true)
    }else{
     setActive(false)
    }
     
  
 
   


 },[password,oldpassword,password2])
 

  const onChange = (date, dateString) => {
    setDate(date)
  };
  

  return (
    <>
     
     

            <div>
              <Form   name="form_item_path" layout="vertical" onFinish={onFinish}>
                {/* <MyFormItemGroup  prefix={["user"]}>
                  <MyFormItemGroup  prefix={["name"]}> */}
                  
                    <Row>
                      
                      <Col span={24}>
                        <MyFormItem name="oldpassword" label={t("currentpassword")}>
                          <Input  onChange={ handlechange}
                          name="oldpassword"
                            placeholder=""
                            className="passwordInput"
                            type="password"
                            suffix={<img src={passwordIcon} />}
                          />
                        </MyFormItem>
                        {error?.oldpassword ? <div style={{color:"red"}}>{error?.oldpassword}</div> : ""}
                      </Col>
                      <Col span={24}>
                        <MyFormItem name="password" label={t("newpassword")}>
                          <Input  onChange={ handlechange}
                           name="password"
                            placeholder=""
                            className="passwordInput"
                            type="password"
                            suffix={<img src={passwordIcon} />}
                          />
                           
                         
                        </MyFormItem>
                        <p style={{ fontSize: "12.98px", color: "#5F5F5F" }}>
                            Ваш пароль должен состоять минимум из 7 символов и
                            максимум из 64 символов и содержать цифры.
                          </p>
                       
                      </Col>
                      <Col span={24}>
                        <MyFormItem name="password2" label={t("newpassword")}>
                          <Input  onChange={ handlechange}
                          name="password2"
                            placeholder=""
                            className="passwordInput"
                            type="password"
                            suffix={<img src={passwordIcon} />}
                          />
                        </MyFormItem>
                        {error?.password ? <div style={{color:"red"}}>{error?.password}</div> : ""}
                        {error?.password2 ? <div style={{color:"red"}}>{error?.password2}</div> : ""}
                      </Col>
                    </Row>
                  {/* </MyFormItemGroup> */}
                {/* </MyFormItemGroup> */}

                <Button
                
                 disabled={active}
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
                  {t("update")}
                </Button>
              </Form>
            </div>
         
    </>
  );
};

export default Password;

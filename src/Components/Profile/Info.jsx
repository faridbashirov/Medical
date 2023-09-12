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
import { UserInfoUpdateFetch } from "../api/userUpdate";
import { useTranslation } from "react-i18next";
import { ToastContainer,toast  } from "react-toastify";

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
import dayjs from "dayjs";
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

const Info = () => {
  const {t}=useTranslation()

  const {data,loading}=getUserFetch()
  const [name,setName]=useState("") 
  const [last_name,setLastName]=useState("")
  const [date,setDate]=useState("")
  const [number,setNumber]=useState("")
  
  const [active,setActive]=useState(true)
  const [error,setError]=useState({})



 console.log(data);

  const onFinish = async(value) => {
    

    const data = await UserInfoUpdateFetch(value)
    
    toast.success(t("updategesuc"), {
      toastId: 'success1',
  })

    
}

  useEffect(()=>{
    setName(data?.first_name)
    setLastName(data?.last_name)
    setDate(data?.birthdate)
    setNumber(data?.phone_number)
  },[data])
  const handlechange =(e)=>{
    if (e.target.name ==="firstName"){
         setName(e.target.value)

     }
    if (e.target.name ==="lastName"){
    
    
        setLastName(e.target.value)
    }
    if (e.target.name ==="date"){
      setDate(e.target.value)
     }
    if (e.target.name ==="number"){
      console.log("here");
      setNumber(e.target.value)
     }
   
   
    
  

  }

useEffect(()=>{
 
  
     if(
      name !== data?.first_name ||
      last_name !== data?.last_name ||
      date !== data?.birthdate ||
      number !== data?.phone_number   
     ){
      setActive(false)
     }else{
      setActive(true)
     }
      
    console.log(data?.first_name);
  
    


  },[name,last_name,date,number])
 


  useEffect(() => {
    console.log(last_name?.length);
  
    if(name?.trim().length === 0){
     
      setError({...error,"first_name":"Please enter a name"});
      setError((prev) => ({
        ...prev,
        ["first_name"]: "Please enter a name"
      }));
      
      setActive(true);
      console.log(error);
    } else {
      setError((prev) => ({
        ...prev,
        ["first_name"]: ""
      }))
      
    }

    if (last_name?.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        ["last_name"]: "Please enter surname"
      }))
      setActive(true);
    } else {
      setError((prev) => ({
        ...prev,
        ["last_name"]: ""
      }))
    }
    if (number?.trim().length === 0 || number?.trim().length < 7) {
      setError((prev) => ({
        ...prev,
        ["number"]: "Please enter a valid number"
      }))
      setActive(true);
    } else {
      setError((prev) => ({
        ...prev,
        ["number"]: ""
      }))
    }

 

    // if (birthdate.trim() === '') {
    //   setBirthError('Zəhmət olmasa doğum tarixinizi yazın');
    //   setSave(false);
    // } else if (!numberRegex.test(birth)) {
    //   setBirthError('Zəhmət olmasa düzgün doğum tarixi yazın');
    //   setSave(false);
    // } else {
    //   setBirthError('');
    // }
  }, [name,last_name,number]);

  const navigate=useNavigate()
 
  if(loading){
    return <div>Loading ...</div>
  }

  const onChange = (date, dateString) => {
    setDate(date)
  };
  

  return (
    <>


     <div>
              <Form 
                initialValues={{
                firstName:data?.first_name,
                lastName:data?.last_name,
                date:data?.birthdate ? dayjs(data?.birthdate ): "",
                number:data?.phone_number,
                email:data?.email,

              }} name="form_item_path" layout="vertical" onFinish={onFinish}>
                {/* <MyFormItemGroup  prefix={["user"]}>
                  <MyFormItemGroup  prefix={["name"]}> */}
                    <Row gutter={16}>
                      <Col span={12}>
                        <MyFormItem     name="firstName" label={t("name")}>
                          <Input name="firstName"  onChange={ handlechange}   className="inputName" placeholder="Имя" />
                        </MyFormItem>
                        {error?.first_name ? <div>{error?.first_name}</div> : ""}
                      </Col>
                      <Col span={12}>
                        <MyFormItem name="lastName" label={t("surname")}>
                          <Input name="lastName" onChange={ handlechange} 
                            placeholder="Фамилия "
                            className="lastInputName"
                          />
                        </MyFormItem>
                        {error?.last_name ? <div>{error?.last_name}</div> : ""}
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <MyFormItem name="date" label={t("birthdate")}>
                          <DatePicker
                            className="datePicker"
                            onChange={onChange}
                            dateFormat="YYYY-MM-DD"
                          />
                        </MyFormItem>
                      </Col>
                      <Col span={12}>
                        <MyFormItem name="number" label={t("phonenumber")}>
                          <Row gutter={8}>
                            {/* <Col span={10}>
                              <Select
                                className={"phone-select"}
                                defaultValue="+994"
                               
                                options={[
                                  {
                                    value: "55",
                                    label: "055",
                                  },
                                  {
                                    value: "lucy",
                                    label: "050",
                                  },
                                  {
                                    value: "Yiminghe",
                                    label: "070",
                                  },
                                  {
                                    value: "disabled",
                                    label: "099",
                                  },
                                ]}
                              />
                            </Col> */}
                              
                            <Col span={12}>
                           
                              <Input  onChange={handlechange} defaultValue={data?.phone_number}  name="number"   type="tel" className="lastInputName" />
                             
                            </Col>
                            {error?.number ? <div>{error?.number}</div> : ""}
                          </Row>
                        </MyFormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <MyFormItem  name="email" label={t("mailadress")}>
                          <Input disabled={true}
                            suffix={<img src={mailIcon} />}
                            className="emailInput"
                          />
                        </MyFormItem>
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

export default Info;

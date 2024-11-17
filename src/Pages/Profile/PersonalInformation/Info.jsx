import React, { useState,useEffect } from "react";
import mailIcon from "../../../assets/Svg/mailIcon.svg";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";
import getUserFetch from "../../../Components/api/getUser";
import { UserInfoUpdateFetch } from "../../../Components/api/userUpdate";
import { useTranslation } from "react-i18next";
import { toast  } from "react-toastify";

import {
  Button,
  Col,
  Row,
  Form,
  Input,
  DatePicker,
} from "antd";
import dayjs from "dayjs";

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

  },[name,last_name,date,number])
 


  useEffect(() => {
  
    if(name?.trim().length === 0){
     
      setError({...error,"first_name":"Please enter a name"});
      setError((prev) => ({
        ...prev,
        ["first_name"]: "Please enter a name"
      }));
      
      setActive(true);
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

import React, { useState,useEffect } from "react";
import passwordIcon from "../../../assets/Svg/passwordIcon.svg";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";
import { resetPassword } from "../../../Components/api/resetPassword";
import { useTranslation } from "react-i18next";
import {
  Button,
  Col,
  Row,
  Form,
  Input,
  
} from "antd";

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


const Password = () => {
  const {t}=useTranslation()

    const [password,setPassword]=useState("")
    const [oldpassword,setoldPassword]=useState("")
    const [password2,setPassword2]=useState("")
    const [active,setActive] = useState(true)
    const [error,setError]=useState({})
    const [form] = Form.useForm()

    const handlechange =(e)=>{
        setError({})
        if(e.target.name === "oldpassword"){
            setoldPassword(e.target.value);
        }
        if(e.target.name === "password"){
            setPassword(e.target.value)
        }
        if(e.target.name === "password2"){
            setPassword2(e.target.value)
        }
        
    }
  

  const navigate=useNavigate()
  const onFinish = async(value) => {
    if(oldpassword.trim().length === 0){
        setError((prev) => ({
            ...prev,
            ["oldpassword"]: t("passworderror")
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
  if( password?.trim().length < 3){
    setError((prev) => ({
        ...prev,
        ["password2"]: "Password is short !"
      }))
      setActive(true)
    
  }  
  if(password !== password2){
    setError((prev) => ({
        ...prev,
        ["password"]: t("wrongpasswordmatch")
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
   if(data?.message ||  data?.Errors){
    setError((prev) => ({
        ...prev,
        ["oldpassword"]:  t("wrongpassword")
      }))
      
   }
   else{
    alert("Your password is updated!")
    form.resetFields()
    setPassword("")
    setoldPassword("")
    setPassword2("")
    setActive(true)

   
   }
}
  

}
   

}

  useEffect(()=>{
    if(
        password.trim() === ""&&
        oldpassword.trim() === "" &&
        password2.trim() === "" &&
        password.trim()  !==   password2.trim() 
   
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
              <Form form={form}   name="form_item_path" layout="vertical" onFinish={onFinish}>                  
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

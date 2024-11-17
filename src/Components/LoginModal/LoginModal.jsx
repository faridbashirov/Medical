import React,{useState} from 'react';
import {Button, ConfigProvider, Divider, Form, Input, message, Modal, Typography} from "antd";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LoginModal.css'
import { useNavigate } from 'react-router-dom';
import { fetchLoginUser } from '../../store/thunk/authThunk';
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Password from 'antd/es/input/Password';
import { use } from 'i18next';
import { Controller } from 'react-hook-form';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import { reseterrors } from '../../store/reducers/userReducer';

import i18next from 'i18next';



const {Item} = Form
const LoginModal = ({openLogin, onCloseLogin,onOpenRegister}) => {
   const {t}=useTranslation()
  const schema = Yup.object().shape({
   
    
    username:Yup.string()
    .label("Username")
    .trim()
    .required(t("usernameerror"))
    .min(3,t("length"))
    .max(64),
    password:Yup.string()
    .label("Password")
    .trim()
    .required(t("passworderror"))
    .max(64,"invalid"),
    
   
   
   
   
      })
  const {control,reset, handleSubmit,formState: { errors  },clearErrors } = useForm(
        ({
          mode: "onChange",
          
          resolver: yupResolver(schema),
        }))
   const navigate=useNavigate()
   const dispatch=useDispatch()
   const displayLoginNotification = () => {
   
    toast(t("succeslog"));
  };
   const {errorss, user,first_login}=useSelector((state)=>state.auth)
   const {active,setActive}=useState(false)
   const [error,setError]=useState({username:null,
    password:null})

    
   const resetform=()=>{
    onCloseLogin()
    reset()
    clearErrors()
    dispatch(reseterrors())
    


   }
   const userLogin= async (values)=>{
    values["lang"]=i18next.language
    
    
  
    dispatch(fetchLoginUser(values))
    values={}
    reset(values)
  
    
  }

  React.useEffect(() => {
    let token = localStorage.getItem("authToken")
    if (first_login){
      navigate("/")
      onCloseLogin()
      displayLoginNotification()
    }
  }, [first_login])
  
 

  return (
    <>
    <ToastContainer
    position='top-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='light'
  />
    
    <Modal destroyOnClose open={openLogin} onCancel={resetform} footer={[]}>
      
      <Typography className={'login-title'}><Trans i18nKey="loginregister"></Trans></Typography>
      <Divider/>
      <Form   onFinish={handleSubmit(userLogin)} >
        <Item name="username">
        <Controller
             rules={{
              required: "This field is required",
            }}
            name="username"
            control={control}
            render={({ field }) => (
             
              <Input {...field} className="input" placeholder={t("username")}/>
            )}
          />
           
        
         
        </Item>
         
         {errors?.username && <div style={{color:"red",paddingBottom:"5px"}}>{errors.username.message}</div> }
       
        <Item
          name="password"
        >
           <Controller
             rules={{
              required: "This field is required",
            }}
            name="password"
            control={control}
            render={({ field }) => (
             
              <Input.Password {...field} className="input" placeholder={t("password")}/>
            )}
          />
         
        </Item>
        {errors?.password && <div style={{color:"red",paddingBottom:"5px"}}>{errors.password.message}</div> }
      
        {errorss && <div style={{color:"red",paddingBottom:"5px"}}>{errorss}</div>}
        
       
       
        
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>{t("login")}</Button>
        <Button type={'link'} htmlType={'submit'} block size={'large'} style={{ marginBottom: '.5rem'}}>{t("forgot")}</Button>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#56C661',
            },

          }}
        >
          <Button type={'primary'} htmlType={'button'} block size={'large'} style={{margin:'0 !important'}} onClick={onOpenRegister}>{t("newaccaunt")}</Button>
        </ConfigProvider>
      </Form>
     
     
    </Modal>
    </>
  );
};

export default LoginModal;

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
import i18next from 'i18next';



const {Item} = Form
const LoginModal = ({openLogin, onCloseLogin,onOpenRegister}) => {
   const {t}=useTranslation()
  const schema = Yup.object().shape({
   
    
    username:Yup.string()
    .label("Username")
    .trim()
    .required(t("usernameerror"))
    .min(3)
    .max(64),
    password:Yup.string()
    .label("Password")
    .trim()
    .required(t("passworderror"))
    .min(3,'must be at least 3 characters long')
    .max(64,"invalid"),
    
   
   
   
   
      })
  const {control,reset, handleSubmit,formState: { errors  } } = useForm(
        ({
          mode: "onChange",
          
          resolver: yupResolver(schema),
        }))
   const navigate=useNavigate()
   const dispatch=useDispatch()
   const displayLoginNotification = () => {
   
    toast("You looged in!");
  };
   const {errorss, user,first_login}=useSelector((state)=>state.auth)
   
   const [error,setError]=useState({username:null,
    password:null})

    
   
   const userLogin= async (values)=>{
    console.log(values);
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
    
    <Modal open={openLogin} onCancel={onCloseLogin} footer={[]}>
      
      <Typography className={'login-title'}><Trans i18nKey="loginregister"></Trans></Typography>
      <Divider/>
      <Form  onFinish={handleSubmit(userLogin)} >
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
         {errors?.username && errors.username.message}
       
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
        {errors?.password && errors.password.message}
        {errorss && errorss}
        
       
       
        
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>{t("login")}</Button>
        <Button type={'link'} htmlType={'submit'} block size={'large'} style={{ marginBottom: '.5rem'}}>Забыли
          пароль?</Button>
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

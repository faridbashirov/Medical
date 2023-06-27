import React,{useState} from 'react';
import {Button, ConfigProvider, Divider, Form, Input, Modal, Typography} from "antd";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LoginModal.css'
import { useNavigate } from 'react-router-dom';
import { fetchLoginUser } from '../../store/thunk/authThunk';
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Password from 'antd/es/input/Password';
import { use } from 'i18next';



const {Item} = Form
const LoginModal = ({openLogin, onCloseLogin,onOpenRegister}) => {
  
   const navigate=useNavigate()
   const dispatch=useDispatch()
   const displayLoginNotification = () => {
   
    toast("You looged in!");
  };
   const {errors, user,first_login}=useSelector((state)=>state.auth)
   
   const [error,setError]=useState({username:null,
    password:null})

    
   
   const userLogin= async (values)=>{
    

    if (!values.email){
      setError({username:"Username Required",
      password:null})

    }
    if (!values.password){
      setError({username:null,
      password:"Password Required"})
    }
    if((!values.password && !values.email)){
      setError({username:"Username Required",
      password:"Password Required"})

    }
    if((values.password && values.email)){
      setError({username:null,
      password:null})
      dispatch(fetchLoginUser(values))
   
      
  }
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
      
      <Typography className={'login-title'}>Войти или <br/>завести аккаунт</Typography>
      <Divider/>
      <Form onFinish={userLogin} >
        <Item name="email">
          <Input placeholder={'электронной почты'} className={'login-input'} />
         
        </Item>
        { error.username && <p>username error</p>}
       
        <Item
          name="password"
        >
          <Input.Password placeholder={'Пароль'} className={'login-input'} />
         
        </Item>
        { error.password ?<p>password error</p> : ""}

        {errors ? <p>{errors}</p> : ""}
       
        
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>Войти</Button>
        <Button type={'link'} htmlType={'submit'} block size={'large'} style={{ marginBottom: '.5rem'}}>Забыли
          пароль?</Button>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#56C661',
            },

          }}
        >
          <Button type={'primary'} htmlType={'button'} block size={'large'} style={{margin:'0 !important'}} onClick={onOpenRegister}>Создать новый аккаунт</Button>
        </ConfigProvider>
      </Form>
     
     
    </Modal>
    </>
  );
};

export default LoginModal;

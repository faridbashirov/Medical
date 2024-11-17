import React,{useEffect, useState} from 'react';
import {Form, Input,Select,Button} from "antd";
import './RegisterMOdal.css'
import { locationFetch } from '../api/locationFetch';
import { registerFetch } from '../api/registerFetch';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import {toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';


const {Item} = Form
const ClientForm = ({onCancel,keys}) => {
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
    username:Yup.string()
  
    .trim()
    .required(t("usernameerror"))
    .min(3,t("length"))
    .max(64),
    password:Yup.string()
   
    .trim()
    .required(t("passworderror"))
    .min(3,t("length"))
    .max(64),
   
   
   
   
      })
  const {control,reset, handleSubmit,formState: { errors },clearErrors } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  );
  const [location,setLocation]=useState([])
  const [error,setError] = useState({})
 if(keys !== "1"){
  clearErrors()
 }

  const handleRegistration = async(values) => {
    const data = await registerFetch(values)

    if(data.Errors){
            setError(data.Errors)
            
          }
    
    if(data.status===201){
                  setError({})
                  values={}
                  reset(values)
                  
                  onCancel()
                  toast(t("succesreg"));
      
  }
}

  const handleChange = (value) => {
    setSelect(value)

  };
  useEffect(()=>{
   async function getLocation(){
    const data = await locationFetch()
    setLocation(data)
   }

   getLocation()
  },[])
   
  const options=[]
  location.map((item)=>{
    options.push({ value: item.id , label: item.name })
   
      


  })
  
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
    <Form    onFinish={handleSubmit(handleRegistration)}>
  
      <Item style={{
        marginBottom: '10px',
        
      }}>
        <div style={{
          display: 'inline-block',
          width: 'calc(50% - 0.5rem)',
        }}>
          <div style={{display:'flex',flexDirection:'column'}}>
        <Item style={{marginBottom:'3px'}}>
        <Controller
             rules={{
              required: "This field is required",
            }}
            name="first_name"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t("name")}  />
            )}
          />
          {/* <Input placeholder={'First Name'} name="first_name" className={'input'} {...register('first_name',{ required: "Name is required" })} /> */}
          
         </Item>
         <p style={{color:'red'}}> {errors?.first_name && errors.first_name.message}</p>
        {error.first_name ? <div
        style={{
          
          width: '100%',
        }}>{error.first_name}</div> : ""}
         </div>
        </div>
       
        
        <div style={{
          display: 'inline-block',
          width: 'calc(50% - 0.5rem)',
          margin: '0 0 0 1rem',
        }}>
          <div style={{display:'flex',flexDirection:'column'}}>
        <Item style={{marginBottom:'3px'}}>
        <Controller
             rules={{
              required: "This field is required",
            }}
            name="last_name"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t("surname")}  />
            )}
            
          />
          {/* <Input placeholder={'Last Name'} name="last_name" className={'input'}/> */}
          
        </Item>
        <p style={{color:'red'}}>{errors?.last_name && errors.last_name.message}</p>
        {error.last_name ? <div style={{
          
          width: '100%',
          
          
        }}>{error.first_name}</div> : ""}
        </div>
        </div>
       
      
      </Item>
      <div style={{display:"flex",
                     justifyContent:"space-between"}}>
      
       
        </div>
      <Item name="email">
      <Controller
             rules={{
              required: "This field is required",
            }}
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t("mailadress")}   />
            )}
          />
        {/* <Input placeholder={'email'} name="email" className={'input'}/> */}
        
      </Item>
      <p style={{color:'red'}}>{errors?.email && errors.email.message}</p>
        {error.email ? <div style={{
          
          width: '100%',
          
          
        }}>{error.email}</div> : ""}
      {/* {error.email ? <span>{error.email}</span> : ""}
      {errors?.email && errors.email.message} */}
      <Item name="phone_number">
      <Controller
            
            name="phone_number"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t("phonenumber")}  />
            )}
          />
        {/* <Input placeholder={'Phone number'} name="phone_number" className={'input'}/> */}
        
      </Item>

      <p style={{color:'red'}}>{errors?.phone_number && errors.phone_number.message}</p>
        {error.phone_number ? <div style={{
          
          width: '100%',
          
          
        }}>{error.phone_number}</div> : ""}
      <Item name="username">
      <Controller
             rules={{
              required: "This field is required",
            }}
            name="username"
            control={control}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t("username")}  />
            )}
          />
          
        {/* <Input placeholder={'Username'} name="username" className={'input'}/> */}
        
      </Item>

      <p style={{color:'red'}}>{errors?.username && errors.username.message}</p>
        {error.username ? <div style={{
          
          width: '100%',
          
          
        }}>{error.username}</div> : ""}
      
      <Item name="location">
      <Controller
            name="location"
            render={({ field }) => (
              <Select {...field} options={options} className="input" placeholder={t("selectcountry")}  />
            )}
            
            control={control}
            
            onFocus={() => refReactSelect.current.focus()}
          />
        {/* <Select
          defaultValue={"disabled"}
          
          className={'select'}
          onChange={handleChange}
          options={options
          }
        /> */}
         
      </Item>
      {errors?.location && errors?.location.message}
      <Item
        name="password"
      >
         <Controller
             
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field}  placeholder={t("password")} name="password" className={'input'}/>
             
            )}
          />
        
      
      </Item>
      <p style={{color:'red'}}>{errors?.password && errors.password.message}</p>
        {error.password ? <div style={{
          
          width: '100%',
          
          
        }}>{error.password}</div> : ""}

      <Button type={'primary'} htmlType={'submit'} block size={'large'}
              style={{display: 'block', marginBottom: '.5rem'}}>{t("register")}</Button>
    </Form>
    </>
  );
};

export default ClientForm;

import React,{useEffect, useState} from 'react';
import {Form, Input,Select,Button} from "antd";
import './RegisterMOdal.css'
import { locationFetch } from '../api/locationFetch';
import { registerFetch } from '../api/registerFetch';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';


const {Item} = Form
const ClientForm = ({onCancel}) => {
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
  const {control,reset, handleSubmit,formState: { errors } } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  );
  const [location,setLocation]=useState([])
  const [error,setError] = useState({})
 


  const handleRegistration = async(values) => {
    console.log("here");
    const data = await registerFetch(values)

    if(data.Errors){
      console.log("error");
            setError(data.Errors)
            
          }
    
    if(data.status===201){
      console.log("success");
                  setError({})
                  values={}
                  reset(values)
                  
                  onCancel()
      
  }
}

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
      {error.email ? <span>{error.email}</span> : ""}
      {errors?.email && errors.email.message}
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

      {errors?.phone_number && errors.phone_number.message}
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
      {errors?.username && errors.username.message}
      {error.username ? <span>{error.username}</span> : ""}
      
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
      {errors?.password && errors.password.message}

      <Button type={'primary'} htmlType={'submit'} block size={'large'}
              style={{display: 'block', marginBottom: '.5rem'}}>{t("register")}</Button>
    </Form>
  );
};

export default ClientForm;

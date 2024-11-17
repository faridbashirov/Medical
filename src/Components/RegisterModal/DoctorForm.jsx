import React,{useState ,useEffect}from 'react';
import {Divider, Form, Input, Select,Button} from "antd";
import './RegisterMOdal.css'
import { hospitalFetch } from '../api/hospitalFetch';
import { positionFetch } from '../api/positionFetch';
import { locationFetch } from '../api/locationFetch';
import { doctorRegisterFetch } from '../api/doctorRegisterFetch';
import {toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';

const {Item} = Form
const DoctorForm = ({onCancel,keys}) => {
  const {t}=useTranslation()
  const schema = Yup.object().shape({
    first_name: Yup.string()
        .label(t("name"))
        .trim()
        .required(t("nameerror"))
        .min(3,t("length"))
        .max(64),
    last_name:Yup.string()
    .label(t("surname"))
    .trim()
    .required(t("lastnameerror"))
    .min(3,(t("surname"),t("length")))
    .max(64),
    email:Yup.string()
    .label(t("mailadress")) 
    .email(t("validemail"))
    .trim()
    .required(t("emailerror"))
    ,
    // phone_number:Yup.string()
    // .label("Phone number")
    // .trim()
    // .required()
    // .min(3)
    // .max(64),
    username:Yup.string()
    .label(t("username"))
    .trim()
    .required(t("usernameerror"))
    .min(3,t("length"))
    .max(64),
    // location:Yup.string()
    // .label("Location")
    // .required(t("")),
    hospital:Yup.string()
    .label("Hospital")
    .required(t("hospitalserror")),
    position:Yup.string()
    .label("Position")
    .required(t("positionerror")),
    password:Yup.string()
    .label(t("password"))
    .min(3)
    .max(64)
    
    .required(t("passworderror"))
   
      })
    
  
  const {control, handleSubmit,formState: { errors },clearErrors } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  )
  useEffect(()=>{
    clearErrors()
  },[])

  const [location,setLocation]=useState([])
  const [hospital,setHospital]=useState([])
  const [position,setPosition]=useState([])
  const [error,setError] = useState({})
  const [dataerror,setDataError] = useState({})
  const [select,setSelect]=useState(1)
  const navigate = useNavigate()


  const handleRegistration = async(values) => {
    const data = await doctorRegisterFetch(values)
    if(data.Errors){
            setError(data.Errors)}
    if(data.message){
                  setError({})
                  
                  onCancel()}}
   useEffect(()=>{
    async function getLocation(){
     const data = await locationFetch()
     setLocation(data)
    }
 
    getLocation()
   },[])

   useEffect(()=>{
    async function getHospital(){
     const data = await hospitalFetch()
     setHospital(data)
    }
 
    getHospital()
   },[])
   useEffect(()=>{
    async function getPosition(){
     const data = await positionFetch()
     setPosition(data)
    }
 
    getPosition()
   },[])
 
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
    <Item className='flex items-start' style={{
      marginBottom: '10px',
      
    }}>
      <div style={{
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
      }}>
        <div style={{display:'flex',flexDirection:'column'}}>
      <Item style={{marginBottom:'3px'}}>
      <Controller
          
      
           
          
          name="first_name"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("name")}  />
          )}
        />
        {/* <Input placeholder={'First Name'} name="first_name" className={'input'} {...register('first_name',{ required: "Name is required" })} /> */}
        
       </Item>
      <p style={{color:'red'}}>{errors?.first_name && errors.first_name.message}</p>
      {error.first_name ? <div
      style={{
        
        width: '100%',
        color:'red'
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
        color:'red',
        
        
        
      }}>{error.first_name}</div> : ""}
      </div>
      </div>
     
     
    
    </Item>
    <div style={{display:"flex",
                   justifyContent:"space-between"}}>
    
     
      </div>
    <Item name="email">
    <Controller
         
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("mailadress")}  />
          )}
        />
      {/* <Input placeholder={'email'} name="email" className={'input'}/> */}
      
    </Item>
    
    <p style={{color:'red'}}>{errors?.email && errors.email.message}</p>
      {error.email ? <div
      style={{
        
        width: '100%',
        color:'red'
      }}>{error.email}</div> : ""}
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
          
          name="username"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("username")}  />
          )}
        />
        
      {/* <Input placeholder={'Username'} name="username" className={'input'}/> */}
      
    </Item>
   
    <p style={{color:'red'}}>{errors?.username && errors.username.message}</p>
      {error.username ? <div
      style={{
        
        width: '100%',
        color:'red'
      }}>{error.username}</div> : ""}
    
    
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
      {error.password ? <div
      style={{
        
        width: '100%',
        color:'red'
      }}>{error.password}</div> : ""}
    
    <Item name="location">
    <Controller
          name="location"
          rules={
            {required: "This field is required"}
          }
          control={control}
         
          render={({ field }) => (
            <Select
            
            // defaultActiveFirstOption={false}
           
             {...field} options={
              location.map((item)=>{
              return { value: item.id , label: item.name }})} name="location"  className="input" placeholder={t("selectcountry")}  />
          )}
          
          
          
          
        />
      
       
    </Item>
    {errors?.location && errors.location.message}
    <Item name="position">
    <Controller
          name="position"
          rules={
            {required: "This field is required"}
          }
          render={({ field }) => (
            <Select {...field} options={
              position.map((item)=>{
              return { value: item.id , label: item.name }})}  className="input" placeholder={t("selectposition")}  />
          )}
          
          control={control}
          
          onFocus={() => refReactSelect.current.focus()}
        />
      
       
    </Item>
    <p style={{color:'red'}}> {errors?.position && errors.position.message}</p>
    <Item name="hospital">
    <Controller
          name="hospital"
          
          render={({ field }) => (
            <Select {...field}  options={
              hospital.map((item)=>{
              return { value: item.id , label: item.name }})}
              
              className="input" placeholder={t("selecthospital")}  />
          )}
          
          control={control}
          rules={
            {required: "This field is required"}
          }
          onFocus={() => refReactSelect.current.focus()}
        />
      
       
    </Item>
    <p style={{color:'red'}}>{errors?.hospital && errors.hospital.message}</p>
    
    
    <Button type={'primary'} htmlType={'submit'} block size={'large'}
            style={{display: 'block', marginBottom: '.5rem'}}>{t("register")}</Button>
    </Form>

    </>
    
  );
};

export default DoctorForm;

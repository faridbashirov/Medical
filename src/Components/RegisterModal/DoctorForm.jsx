import React,{useState ,useEffect}from 'react';
import {Divider, Form, Input, Select,Button} from "antd";
import './RegisterMOdal.css'
import { hospitalFetch } from '../api/hospitalFetch';
import { positionFetch } from '../api/positionFetch';
import { locationFetch } from '../api/locationFetch';
import { doctorRegisterFetch } from '../api/doctorRegisterFetch';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';

const {Item} = Form
const DoctorForm = ({onCancel}) => {
  const {t}=useTranslation()
  const schema = Yup.object().shape({
    first_name: Yup.string()
        .label("First Name")
        .trim()
        .required()
        .min(3)
        .max(64),
    last_name:Yup.string()
    .label("Last name")
    .trim()
    .required()
    .min(3)
    .max(64),
    email:Yup.string()
    .label("Email")
    .email()
    .trim()
    .required()
    .min(3)
    .max(64),
    phone_number:Yup.string()
    .label("Phone number")
    .trim()
    .required()
    .min(3)
    .max(64),
    username:Yup.string()
    .label("Username")
    .trim()
    .required()
    .min(3)
    .max(64),
    location:Yup.string()
    .label("Location")
    .required(),
    hospital:Yup.string()
    .label("Hospital")
    .required(),
    position:Yup.string()
    .label("Position")
    .required(),
    password:Yup.string()
    .label("Password")
    .min(3)
    .max(64)
    
    .required()
   
      })
    
  
  const {control, handleSubmit,formState: { errors } } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  )
  
  
  

  


 
  console.log(errors);


  const [location,setLocation]=useState([])
  const [hospital,setHospital]=useState([])
  const [position,setPosition]=useState([])
  const [error,setError] = useState({})
  const [dataerror,setDataError] = useState({})
  const [select,setSelect]=useState(1)
  const navigate = useNavigate()


  const handleRegistration = async(values) => {
    console.log(values);
    const data = await doctorRegisterFetch(values)
    if(data.Errors){
      console.log("error");
            setError(data.Errors)}
    if(data.message){
      console.log("success");
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
    {errors?.position && errors.position.message}
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
    {errors?.hospital && errors.hospital.message}
    
    
    <Button type={'primary'} htmlType={'submit'} block size={'large'}
            style={{display: 'block', marginBottom: '.5rem'}}>{t("register")}</Button>
    </Form>
    
  );
};

export default DoctorForm;

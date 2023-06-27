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

const {Item} = Form
const DoctorForm = () => {
  const {control, handleSubmit,formState: { errors } } = useForm();
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
    <Item style={{
      marginBottom: '10px',
      
    }}>
      <div style={{
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
      }}>
      <Item >
      <Controller
           rules={{
            required: "This field is required",
          }}
          
          name="first_name"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder="First Name *"  />
          )}
        />
        {/* <Input placeholder={'First Name'} name="first_name" className={'input'} {...register('first_name',{ required: "Name is required" })} /> */}
        
       </Item>
      {errors?.first_name && errors.first_name.message}
      {error.first_name ? <div
      style={{
        
        width: '100%',
      }}>{error.first_name}</div> : ""}
      
      </div>
      
      <div style={{
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
        margin: '0 0 0 1rem',
      }}>
      <Item >
      <Controller
           rules={{
            required: "This field is required",
          }}
          name="last_name"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder="Last Name *"  />
          )}
        />
        {/* <Input placeholder={'Last Name'} name="last_name" className={'input'}/> */}
        
      </Item>
      {errors?.last_name && errors.last_name.message}
      {error.last_name ? <div style={{
        
        width: '100%',
        
        
      }}>{error.first_name}</div> : ""}
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
            <Input {...field} className="input" placeholder="Email *"  />
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
            <Input {...field} className="input" placeholder="Phone Number *"  />
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
            <Input {...field} className="input" placeholder="Username *"  />
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
           rules={{
            required: "This field is required",
          }}
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password {...field}  placeholder={'Пароль'} name="password" className={'input'}/>
           
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
              return { value: item.id , label: item.name }})} name="location"  className="input" placeholder="Select Country *"  />
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
              return { value: item.id , label: item.name }})}  className="input" placeholder="Select Position *"  />
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
              
              className="input" placeholder="Select Hospital *"  />
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
            style={{display: 'block', marginBottom: '.5rem'}}>register</Button>
    </Form>
    
  );
};

export default DoctorForm;

import React,{useEffect, useState} from 'react';
import {Form, Input,Select,Button} from "antd";
import './RegisterMOdal.css'
import { locationFetch } from '../api/locationFetch';
import { registerFetch } from '../api/registerFetch';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';


const {Item} = Form
const ClientForm = ({onCancel}) => {
  const {control, handleSubmit,formState: { errors } } = useForm();
  const [location,setLocation]=useState([])
  const [error,setError] = useState({})
 
  const handleRegistration = async(values) => {
    console.log("here");
    const data = await registerFetch(values)

    if(data.Errors){
      console.log("error");
            setError(data.Errors)
            
          }
    if(data.message){
      console.log("success");
                  setError({})
                  
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
      
      <Item name="category">
      <Controller
            name="category"
            render={({ field }) => (
              <Select {...field} options={options} className="input" placeholder="Select Country *"  />
            )}
            
            control={control}
            rules={{ required: true }}
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
      {error.location ? <span>{error.location}</span> : ""}
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

      <Button type={'primary'} htmlType={'submit'} block size={'large'}
              style={{display: 'block', marginBottom: '.5rem'}}>register</Button>
    </Form>
  );
};

export default ClientForm;

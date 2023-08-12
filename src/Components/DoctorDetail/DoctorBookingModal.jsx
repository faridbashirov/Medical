import React, { useState,useEffect } from 'react';
import {Button, DatePicker, Divider, Form, Input, Modal, Select, Typography, TimePicker} from "antd";
const { RangePicker } = DatePicker;
import { Controller } from 'react-hook-form';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { positionFetch } from '../api/positionFetch';
import { doctorBook } from '../api/doctorbook';
import {toast, ToastContainer } from "react-toastify";


const {Item} = Form
const DoctorBookingModal = ({onCloseBookingModal, openBooking}) => {
   const {id}=useParams()
   const {t}=useTranslation()
 
   const [position,setPosition] = useState([])

  const schema = Yup.object().shape({
   
   
    name:Yup.string()
    
    .trim()
    .required(t("nameerror"))
    ,
    phone:Yup.string()
   
    .trim()
    .required(t("phoneerror"))
    .min(3,t("length"))
    
   ,
    
    date:Yup.string()
  
    .required(t("dateerror"))
    ,
    time:Yup.string()
    
    .trim()
    .required(t("timerrror"))
    ,
   
   
   
   
      })

  const {control,reset,handleSubmit,formState: { errors  } } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    }))
  const onFinish =  async (values) => {
    console.log(values)
    values["doctor_id"]=id
    const data=await doctorBook(values)
    if (data.message){
      onCloseBookingModal()
      toast(t("booksuccess"))
     

    }
    

  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  useEffect(()=>{
    async function getLocation(){
     const data = await positionFetch()
     setPosition(data)
    }
 
    getLocation()
   },[])
   

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
    <Modal open={openBooking} onCancel={onCloseBookingModal} footer={[]}>
      <Typography className={'login-title'}>Войти или <br/>завести аккаунт</Typography>
      <Divider/>
      <Form onFinish={handleSubmit(onFinish)}>
        <Item >
        <Controller
             rules={{
              required: "This field is required",
            }}
            name="name"
            control={control}
            render={({ field }) => (
             
              
              <Input {...field} placeholder={t("fullname")} className={'booking-input'} />
            )}
          />
          {errors?.name && errors.name.message}
        
           
          
        </Item>
        <Item
          name="phone"
        >
           <Controller
             rules={{
              required: "This field is required",
            }}
            name="phone"
            control={control}
            render={({ field }) => (
             
              
              <Input {...field} placeholder={'(+994)'} className={'booking-input'} />
            )}
          />
           {errors?.phone && errors.phone.message}
        </Item>
        <Item name="category">
        <Controller
             rules={{
              required: "This field is required",
            }}
            name="category"
            control={control}
            onFocus={() => refReactSelect.current.focus()}
            render={({ field }) => (
             
              
              
              <Select 
            // defaultValue="lucy"
            placeholder={t("category")}
            className={'booking-input'}
            onChange={handleChange}
            {...field}
            options={ position.map((item,index) =>{
              return  {key:index, "value": item.name, "label": item.name }
            })
           
            }
          />
          
            )}

          />
              {errors?.category && errors.category.message}
          
        </Item>
        <Item name={"time"}
        >
          <Controller
             rules={{
              required: "This field is required",
            }}
            name="time"
            control={control}
            render={({ field }) => (
             
              
              <TimePicker placeholder={t("selecttime")} {...field} className={"booking-modal__time-input"}/>
             
            )}
          />
          {errors?.time && errors.time.message}
           
          
      
        </Item>
        <Item valuePropName={'date'} name={"date"}
        >
         
           <Controller
             rules={{
              required: "This field is required",
            }}
            name="date"
            control={control}
            render={({ field }) => (
             
              
              <DatePicker   use12Hours     defaultDate={new Date(2016, 8, 15, 10, 30, 0)} {...field}    placeholder={t("selectdate")} {...field} className={"booking-modal__date-input"}/>
             
            )}
          />
             {errors?.date && errors.date.message}
          
      
        </Item>
        <Button type={'primary'} htmlType={'submit'} block size={'large'} style={{backgroundColor:"#5282ff",display: 'block', marginBottom: '.5rem'}}>{t("bron4")}</Button>
      </Form>
    </Modal>
    </>
  )
};

export default DoctorBookingModal;

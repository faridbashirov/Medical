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
import { positionFetch } from '../../api/positionFetch';
import { doctorBook } from '../../api/doctorbook';
import {toast, ToastContainer } from "react-toastify";
import { hospitalBook } from '../../api/hospitalbook';

const {Item} = Form
const HospitalBookingModal = ({onCloseBookingModal, openBooking}) => {
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
    .min(3)
    
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
    values["hospital_id"]=id
    const data=await hospitalBook(values)
    if (data.message){
      onCloseBookingModal()
      toast(t("booksuccess"))
      reset()
     

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
  
    <Modal open={openBooking} onCancel={onCloseBookingModal} footer={[]}>
      <Typography className={'login-title'}>{t("bron4")}</Typography>
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
         <p style={{
          color:"red"
         }}>{errors?.name && errors.name.message}</p> 
        
           
          
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
           <p style={{
          color:"red"
         }}> {errors?.phone && errors.phone.message}</p>
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
            <p style={{
          color:"red"
         }}>  {errors?.category && errors.category.message}</p>
          
        </Item>
        <div style={{display:"flex",width:"100%",alignItems:"start",justifyContent:"space-between"}}>
        <Item style={{ width:"48%"
          
        }} name={"time"}
        >
          <Controller
             rules={{
              required: "This field is required",
            }}
            name="time"
            control={control}
            render={({ field }) => (
             
              
              <TimePicker style={{width:"100%"}} placeholder={t("selecttime")} {...field} className={"booking-modal__time-input"}/>
             
            )}
          />
          <p style={{
          color:"red"
         }}>{errors?.time && errors.time.message}</p>
           
          
      
        </Item>
        
        <Item valuePropName={'date'} name={"date"} style={{width:"48%"}}
        >
         
           <Controller
             rules={{
              required: "This field is required",
            }}
            name="date"
            control={control}
            
            render={({ field }) => (
             
              
              <DatePicker style={{width:"100%"}}  use12Hours     defaultDate={new Date(2016, 8, 15, 10, 30, 0)} {...field}    placeholder={t("selectdate")} {...field} className={"booking-modal__date-input"}/>
             
            )}
          />
             <p style={{
          color:"red"
         }}> {errors?.date && errors.date.message}</p>
          
      
        </Item>
        </div>
        <Button type={'primary'} htmlType={'submit'} block size={'large'} style={{backgroundColor:"#5282ff",display: 'block', marginBottom: '.5rem'}}>{t("bron4")}</Button>
      </Form>
    </Modal>
    </>
  )
};

export default HospitalBookingModal;

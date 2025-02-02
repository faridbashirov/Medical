import React, { useState,useEffect } from 'react';
import {Button, DatePicker, Divider, Form, Input, Modal, Select, Typography, TimePicker} from "antd";
const { RangePicker } = DatePicker;
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import "react-international-phone/style.css";
import { Controller } from 'react-hook-form';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {toast, ToastContainer } from "react-toastify";
import { hospitalBook } from '../../api/hospitalbook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPositions } from "../../../store/reducers/positionsReducer";
import i18next from 'i18next';

const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone) => {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phone, 'UA');
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
};

const {Item} = Form
const HospitalBookingModal = ({onCloseBookingModal, openBooking}) => {
  const dispatch = useDispatch();
  const { positions } = useSelector((state) => state.positions);
  
   const {id}=useParams()
   const [number, setNumber] = useState("");
  const handlePhoneChange = (value) => {
    setNumber(value);
  };
   const {t}=useTranslation()
  const schema = Yup.object().shape({
    name:Yup.string()
    .trim()
    .required(t("nameerror"))
    ,
    phone: Yup.string()
    .trim()
    .required(t("phoneerror"))
    .test(
      'is-valid-phone',
      t("phoneerror"),
      (value) => isPhoneValid(value)
    ),
    
    date:Yup.string()
  
    .required(t("dateerror"))
    ,
    time:Yup.string()
    
    .trim()
    .required(t("timeerror"))
    ,
      })

  const {control,reset,handleSubmit,formState: { errors  } } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    }))
  const onFinish =  async (values) => {
    values["hospital_id"]=id
    const data=await hospitalBook(values)
    if (data.message){
      onCloseBookingModal()
      toast(t("booksuccess"))
      reset()
     

    }
    

  }

  const handleChange = (value) => {
  };
  
  useEffect(()=>{
    dispatch(fetchAllPositions())
    async function getLocation(){
     
    }
 
    getLocation()
   },[])
   

  return (
    <>
  
    <Modal className='hospital-booking-modal' open={openBooking} onCancel={onCloseBookingModal} footer={[]}>
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
        <Item name="phone" className='phone-doctor-info'>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: t("phoneerror"),
              validate: (value) => isPhoneValid(value) || t("phoneerror"),
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                value={number}
                onChange={(value) => {
                  handlePhoneChange(value);
                  field.onChange(value);
                }}
                type="tel"
              />
            )}
          />
        <p className='phone-error' style={{ color: "red" }}>{errors?.phone && errors.phone.message}</p>
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
            options={ positions.map((item,index) =>{
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

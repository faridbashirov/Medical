import React, { useState,useRef } from 'react'
import { useSelector } from 'react-redux';
import { axiosPrivate } from '../../api/api';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {toast, ToastContainer } from "react-toastify";
import {Button, ConfigProvider, Divider, Form, Input, Modal, Typography,Rate} from "antd";

const {Item} = Form
const ReviewModal = ({openReview,onCloseReview,id,add,setAdd}) => {
  const {t}=useTranslation()
  const {user,authToken}=useSelector((state)=>state.auth)
  const formRef =useRef()
  
  const [raiting,setRaiting]=useState(1)
  const schema = Yup.object().shape({
    message: Yup.string()
        
        .trim()
        .required(t("messageerror"))
        ,
   
   
   
   
      })
  const {control,reset, handleSubmit,formState: { errors } } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  );

  console.log(raiting);

  const formhandler =(values)=>{
    console.log(values);
    console.log(raiting);

    


    axiosPrivate.post(`account/doctor_review_create`,{
      
      doctor:id,
      text:values.message,
      rate:raiting


    })
    .then((res) => {
        console.log(res);
        onCloseReview()
        setAdd(!add)
        toast(t("messagesuc"))
        formRef.current.resetFields();
        reset()
        setRaiting(1)
       
    })
    .catch((err) => {
       console.log(err);
    })
  }

  const onchange=(value)=>{
    console.log(value);
    setRaiting(value)



    
  }



  return (
    <>
   
    <Modal open={openReview} onCancel={onCloseReview}  footer={[]}>
      
    <Typography className={'login-title'}>Write Review</Typography>
    <Divider/>
    <Form  ref={formRef}  onFinish={handleSubmit(formhandler)}  >
      <Item name="message">
      <Controller
           rules={{
            required: "This field is required",
          }}
          name="message"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder={'Message'} className={'login-input'} />
          )}
        />
        
    
       
      </Item>
      <p style={{color:'red'}}> {errors?.message && errors.message.message}</p>
      <Item name="rate">
      
              <Rate  value={raiting} onChange={(value)=>onchange(value)}/>
        
       
       
      </Item>

         
      
    
     
     
     
      
    
        <Button type={'primary'} htmlType={'submit'} block size={'large'} style={{margin:'0 !important'}} >Send Review</Button>
    
    </Form>
   
   
  </Modal>
  </>
  )
}

export default ReviewModal
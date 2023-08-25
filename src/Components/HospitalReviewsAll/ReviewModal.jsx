import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { axiosPrivate } from '../../api/api';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import {toast, ToastContainer } from "react-toastify";
import {Button, ConfigProvider, Divider, Form, Input, Modal, Typography,Rate} from "antd";

const {Item} = Form
const ReviewModal = ({openReview,onCloseReview,id,add,setAdd}) => {
  const {user,authToken}=useSelector((state)=>state.auth)
  const {t,i18n} = useTranslation()
  const formRef = React.createRef();
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
  
  const [raiting,setRaiting]=useState(1)



  const formhandler =(values)=>{
    console.log(values);
    console.log(raiting);
    const data={
      hospital:id,
      text:values.message,
      rate:raiting}
    

    axiosPrivate.post(`hospital/hospital_review_create`,{
      
      hospital:id,
      text:values.message,
      rate:raiting


    })
    .then((res) => {
        console.log(res);
        reset()
        setRaiting(1)
        onCloseReview()
        setAdd(!add)
       
      toast(t("messagesuc"))
        
    })
    .catch((err) => {
       console.log(err);
    })
    


    // fetch(`https://hospitalbackend.efgroup.az/`, {
    //   method: 'POST',
    //   body:JSON.stringify({
    //     hospital:id,
    //     text:values.message,
    //     rate:raiting}),

    //    headers: {
    //     'Content-type': 'application/json',
    //     "Authorization":`Bearer ${authToken.access}`
    //   },
    // })
    //    .then((response) => response.json())
    //    .then((data) => {
    //       console.log(data);
    //       onCloseReview()
    //       setAdd(!add)
    //       formRef.current.resetFields();
    //       alert("Message sent successfully")
          
          
          
         
         
          
    //    })
    //    .catch((err) => {
    //       console.log(err.message);
    //    });
  }

  const onchange=(value)=>{
    console.log(value);
    setRaiting(value)



    
  }



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
    <Modal open={openReview} onCancel={onCloseReview}  footer={[]}>
      
      <Typography className={'login-title'}>Write Review</Typography>
      <Divider/>
      <Form   onFinish={handleSubmit(formhandler)}  >
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
           <p style={{color:'red'}}> {errors?.message && errors.message.message}</p>
      
         
        </Item>
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
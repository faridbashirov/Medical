import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { axiosPrivate } from '../../api/api';
import { useTranslation } from 'react-i18next';
import {Button, ConfigProvider, Divider, Form, Input, Modal, Typography,Rate} from "antd";
const {Item} = Form
const ReviewModal = ({openReview,onCloseReview,id,add,setAdd}) => {
  const {t}=useTranslation()
  const {user,authToken}=useSelector((state)=>state.auth)
  const formRef = React.createRef();
  
  const [raiting,setRaiting]=useState(1)

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
        formRef.current.resetFields();
        alert("Message sent successfully")
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
    <Modal open={openReview} onCancel={onCloseReview}  footer={[]}>
      
      <Typography className={'login-title'}>Write Review</Typography>
      <Divider/>
      <Form  ref={formRef} onFinish={formhandler}  >
        <Item name="message">
          <Input placeholder={'Message'} className={'login-input'} />
         
        </Item>
        <Item name="rate">
          
           <Rate value={raiting} onChange={(value)=>onchange(value)}/>
         
        </Item>

           
        
      
       
       
       
        
      
          <Button type={'primary'} htmlType={'submit'} block size={'large'} style={{margin:'0 !important'}} >Send Review</Button>
      
      </Form>
     
     
    </Modal>
  )
}

export default ReviewModal
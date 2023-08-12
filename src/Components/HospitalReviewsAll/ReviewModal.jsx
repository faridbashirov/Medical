import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { axiosPrivate } from '../../api/api';

import {Button, ConfigProvider, Divider, Form, Input, Modal, Typography,Rate} from "antd";
const {Item} = Form
const ReviewModal = ({openReview,onCloseReview,id,add,setAdd}) => {
  const {user,authToken}=useSelector((state)=>state.auth)
  const formRef = React.createRef();
  
  const [raiting,setRaiting]=useState(1)

  console.log(raiting);

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
        onCloseReview()
        setAdd(!add)
        formRef.current.resetFields();
        alert("Message sent successfully")
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
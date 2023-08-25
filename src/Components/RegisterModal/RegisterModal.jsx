import {Button, Divider, Form, Input, Modal, Tabs, Typography} from "antd";
import './RegisterMOdal.css'
import ClientForm from "./ClientForm.jsx";
import DoctorForm from "./DoctorForm.jsx";
import { useTranslation } from 'react-i18next';
import { useEffect,createRef } from "react";



const RegisterModal = ({openRegister, onCloseRegister}) => {
  const {t}=useTranslation()
  const formRef =createRef();
  const items = [
    {
      key: '1',
      label: t("clientregister"),
      children: <ClientForm  keys={"1"} onCancel={onCloseRegister}/>,
    },
    {
      key: '2',
      label: t("doctorregister"),
      children: <DoctorForm  keys={"2"} onCancel={onCloseRegister}/>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
   
   
  };
  useEffect(()=>{
    console.log(1);
  },[])


  return (
    <Modal open={openRegister} onCancel={onCloseRegister} footer={[
      
    ]}>
      <Typography className={'login-title'}>{t("register")}</Typography>
      <Divider/>
      <Tabs
       destroyInactiveTabPane
        defaultActiveKey="1"
        type="card"
        tabBarStyle={{ textAlign: 'center' }} // Add this line to modify the tab bar style
        onChange={onChange}
      >
        {items.map((item) => (
          <Tabs.TabPane key={item.key} tab={item.label}>
            {item.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </Modal>
  );
};

export default RegisterModal;

import {Button, Divider, Form, Input, Modal, Tabs, Typography} from "antd";
import './RegisterMOdal.css'
import ClientForm from "./ClientForm.jsx";
import DoctorForm from "./DoctorForm.jsx";
import { useTranslation } from 'react-i18next';



const RegisterModal = ({openRegister, onCloseRegister}) => {
  const {t}=useTranslation()

  const items = [
    {
      key: '1',
      label: t("clientregister"),
      children: <ClientForm onCancel={onCloseRegister}/>,
    },
    {
      key: '2',
      label: t("doctorregister"),
      children: <DoctorForm onCancel={onCloseRegister}/>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };


  return (
    <Modal open={openRegister} onCancel={onCloseRegister} footer={[
      
    ]}>
      <Typography className={'login-title'}>{t("register")}</Typography>
      <Divider/>
      <Tabs
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

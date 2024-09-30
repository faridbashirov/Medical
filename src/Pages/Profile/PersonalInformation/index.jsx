import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";
import Password from "./Password";
import Info from "./Info2";
import {
  Form,
  Tabs,
} from "antd";
import { useTranslation } from "react-i18next";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item  name={concatName} {...props} />;
};


const Profile = () => {
  const {t}=useTranslation()
  const items = [
    {
      key: '1',
      label: t("info"),
      children: <Info/>,
    },
    {
      key: '2',
      label: t("password"),
      children: <Password/>,
    },
  ];

  const navigate=useNavigate()
  const onChange = (date, dateString) => {
   
  };

  return (
    <>
      <div className="userForm">
        <div
          style={{
            borderBottom: "1px solid #E7E7E7",
                paddingBottom: "30px",
              }}
            >
              <p
                style={{
                  color: "#5282FF",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
               {t("profileinfo")}
              </p>
              <p
                style={{
                  color: "#5F5F5F",
                  fontSize: "16px",
                  fontWeight: "500",
                  paddingTop: "10px",
                }}
              >
               {t("profileinfo2")}
              </p>
            </div>

            <Tabs tabBarStyle={{fontSize:"15px"}} defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
    </>
  );
};

export default Profile;

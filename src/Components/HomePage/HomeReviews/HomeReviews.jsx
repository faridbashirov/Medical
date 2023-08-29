import React from 'react';
import "./HomeReviews.css"
import {Button} from "antd";
import { Tabs } from 'antd';
import TabDoctors from "./TabDoctors.jsx";
import TabClinics from "./TabClinics.jsx";
import { useTranslation } from 'react-i18next';
import allReviewsFetch from '../../api/allReviews';






const HomeReviews = () => {
  const {t}=useTranslation()
  const items = [
    {
      key: '1',
      label: t("Clinics"),
      children: <TabClinics />,
    },
    {
      key: '2',
      label: t("Doctors"),
      children: <TabDoctors />,
    },
  ];
 
 
  const onChange = (children) => {
  }

  return (
    <section className={"home-review"}>
      <div className="container">
        <h3 className="home-reviews__title">{t("comments")}</h3>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
       
      </div>
    </section>
  );
};

export default HomeReviews;

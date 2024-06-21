import React from 'react';
import "./HomeReviews.css"
import { Tabs } from 'antd';
import TabDoctors from "./TabDoctors";
import TabClinics from "./TabClinics";
import { useTranslation } from 'react-i18next';

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
        <Tabs className='review__tabs' defaultActiveKey="1" items={items} onChange={onChange} />
       
      </div>
    </section>
  );
};

export default HomeReviews;

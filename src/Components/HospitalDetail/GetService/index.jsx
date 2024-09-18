import React from 'react';
import pathImg from "../../../assets/Svg/path.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import './GetService.css';
const GetService = ({hospital}) => {
  const {t}=useTranslation()
  return (
    <section className={"get-service-section"}>
      <div className="get-service-header">
        <h4>{t("terms")}</h4>
        <p>{hospital?.name} {t("terms")}</p>
      </div>
      <div className="get-service-container">
        <div className="get-service-item">
          <div className="get-service-item-title">
            <img src={pathImg} alt=""/>
            <span>{t("quiet")}</span>
          </div>
          <div className="get-service-item-desc">{t("quiet2")}</div>
        </div>
        <div className="get-service-item">
          <div className="get-service-item-title">
            <img src={pathImg} alt=""/>
            <span>{t("party")}</span>
          </div>
          <div className="get-service-item-desc">{t("party2")}</div>
        </div>
        <div className="get-service-item">
          <div className="get-service-item-title">
            <img src={pathImg} alt=""/>
            <span>{t("smoking")}</span>
          </div>
          <div className="get-service-item-desc">{t("smoking2")}</div>
        </div>
        <div className="get-service-item">
          <div className="get-service-item-title">
            <img src={pathImg} alt=""/>
            <span>{t("children")}</span>
          </div>
          <div className="get-service-item-desc">{t("children2")}</div>
        </div>
      </div>
    </section>
  );
};

export default GetService;

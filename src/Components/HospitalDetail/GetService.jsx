import React from 'react';
import pathImg from "../../assets/Svg/path.svg"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
const GetService = ({hospital}) => {
  const {t}=useTranslation()
  return (
    <div className={"container"}>
      <div className="get-service">
        <div className="get-service__header">
          <h4 className={"detail-questions__header-title"}>{t("terms")} </h4>
          <p className={"detail-questions__header-subtitle"}>{hospital?.name} {t("terms")}
          </p>
        </div>
        <div className="get-service__content">
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>{t("quiet")}</span>
            </div>
            <div className="get-service__content-item-desc">{t("quiet2")}</div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>{t("party")}</span>
            </div>
            <div className="get-service__content-item-desc">{t("party2")}</div>
          </div>
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>{t("smoking")}</span>
            </div>
            <div className="get-service__content-item-desc">{t("smoking2")}</div>
          </div>
          
          <div className="get-service__content-item">
            <div className="get-service__content-item-path">
              <img src={pathImg} alt=""/>
              <span>{t("children")}</span>
            </div>
            <div className="get-service__content-item-desc">
              <Trans i18nKey="children2"></Trans>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GetService;

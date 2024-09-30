import React from 'react';
import pathImg from "../../../assets/Svg/path.svg";
import { useTranslation } from 'react-i18next';
import './GetService.css';

const GetService = ({ hospital }) => {
  const { t } = useTranslation();
  if (!hospital?.hospital_terms || hospital.hospital_terms.length === 0) {
    return null;
  }

  const createMarkup = (htmlContent) => {
    const formattedContent = htmlContent.replace(/\n/g, '<br />');
    return { __html: formattedContent };
  };

  return (
    <section className="get-service-section">
      <div className="get-service-header">
        <h4>{t("terms")}</h4>
        <p>{hospital?.name} {t("terms")}</p>
      </div>
      <div className="get-service-container">
        {hospital?.hospital_terms?.map((term) => (
          <div key={term?.id} className="get-service-item">
            <div className="get-service-item-title">
              <img src={pathImg} alt=""/>
              <span>{term?.title}</span>
            </div>
            <div className="get-service-item-desc" dangerouslySetInnerHTML={createMarkup(term?.description)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetService;

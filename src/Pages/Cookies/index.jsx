import React, { useEffect, useState } from "react";
import BreadCrumbs from '../../Components/BreadCrumbs';
import arrowDown from "../../assets/Svg/arrow-down.svg";
import arrowUp from "../../assets/Svg/arrow-up-active.svg";
import "./Cookies.css"
import cookiesFetch from "../../Components/api/cookiesFetch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Cookies = () => {
  const [selected, setSelected] = useState(null);
  const toggleFAQ = () => {
    setSelected(selected === null ? true : null);
  };

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  const { t, i18n } = useTranslation();
  const { data, loading, error } = cookiesFetch(localStorage.getItem("lang"));
  useEffect(() => {
    if (data) {
      setSelected(null);
    }
  }, [data, i18next.language]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены </title>
      </Helmet>
      <section className='faq-section'>
        <div className='container'>
          <BreadCrumbs pageItems={[
            {
              title: t("home"),
              href: "/",
            },
            {
              title: t("footerTitle3-3"),
              href: "/cookies"
            },
          ]} />
        </div>
        <div className="privacy-policy-container">
          <div className='privacy-policy-left'>
            <div className="privacy-policy-questions">
              <div className="privacy-policy-question" onClick={toggleFAQ}>
                <div className="privacy-policy-header">
                  {selected !== null ? (
                    <>
                      <div className='privacy-policy-arrow'><img src={arrowUp} alt="" /></div>
                      <div className="privacy-policy-question-title privacy-policy-question-title-active">{data?.category}</div>
                    </>
                  ) : (
                    <>
                      <div className='privacy-policy-arrow'><img src={arrowDown} alt="" /></div>
                      <div className="privacy-policy-question-title">{data?.category}</div>
                    </>
                  )}
                </div>
                {selected !== null && (
                  <div className="privacy-policy-answer" dangerouslySetInnerHTML={createMarkup(data?.text)} />
                )}
              </div>
            </div>
          </div>
          <div className='privacy-policy-right'>
            <div className="privacy-policy-detail">
              {selected !== null && (
                <div className="privacy-policy-answer-desktop" dangerouslySetInnerHTML={createMarkup(data?.text)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookies;

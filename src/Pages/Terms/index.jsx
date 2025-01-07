import React, { useEffect, useState } from "react";
import BreadCrumbs from '../../Components/BreadCrumbs';
import arrowDown from "../../assets/Svg/arrow-down.svg";
import arrowUp from "../../assets/Svg/arrow-up-active.svg";
import facebook from "../../assets/Svg/facebook.svg";
import vk from "../../assets/Svg/Vkontakte.svg";
import instagram from "../../assets/Svg/Instagram.svg";
import "./Terms.css"
import privacyFetch from "../../Components/api/privacyFetch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Terms = () => {
  const [selected, setSelected] = useState(null);
  const toggleFAQ = index => {
    setSelected(selected === index ? null : index);
  };

  const createMarkup = (htmlContent) => {
  const formattedContent = htmlContent.replace(/\n/g, '<br />');
  return { __html: formattedContent };
  };
  const {t,i18n}=useTranslation()
  const {data,loading,error}=privacyFetch(localStorage.getItem("lang"))

  const [active,setActive]=useState(data[0]?.id)
  console.log(data)
  useEffect(()=>{
    setActive(data[0]?.id)
  },[data,i18next.language])

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
              title: t("privacy-policy"),
              href: "/terms"
            },
          ]}/>
        </div>
        <div className="privacy-policy-container">
          <div className='privacy-policy-left'>
            <div className="privacy-policy-questions">
              {data?.map((privacy, index) => (
                <div key={index} className="privacy-policy-question" onClick={() => toggleFAQ(index)}>
                  <div className="privacy-policy-header">
                    {selected === index ?
                      <>
                        <div className='privacy-policy-arrow'><img src={arrowUp} alt="" /></div>
                        <div className="privacy-policy-question-title privacy-policy-question-title-active">{privacy?.category}</div>
                      </>
                      : <>
                        <div className='privacy-policy-arrow'><img src={arrowDown} alt="" /></div>
                        <div className="privacy-policy-question-title">{privacy?.category}</div>
                      </>
                    }
                  </div>
                  {selected === index && (
                    <div className="privacy-policy-answer" dangerouslySetInnerHTML={createMarkup(privacy?.text)} />
                  )}
                </div>
              ))}
            </div>
            <div className='privacy-policy-footer'>
              <h5>{t("help")}</h5>
              <div className='privacy-policy-contact-sosial'>
                <div className='privacy-policy-contact-us'>
                  <h6>+994 000 00 00</h6>
                  <h6>+994 000 00 00</h6>
                  <h6>info@112med.com</h6>
                </div>
                <div className='privacy-policy-sosial-icons'>
                  <img src={facebook} alt="" />
                  <img src={vk} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='privacy-policy-right'>
            <div className="privacy-policy-detail">
              {selected !== null && (
                <div className="privacy-policy-answer-desktop" dangerouslySetInnerHTML={createMarkup(data[selected].text)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
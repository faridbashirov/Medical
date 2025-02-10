import React, { useState } from 'react';
import arrowDown from "../../assets/Svg/arrow-down.svg";
import arrowUp from "../../assets/Svg/arrow-up-active.svg";
import facebook from "../../assets/Svg/facebook.svg";
import vk from "../../assets/Svg/Vkontakte.svg";
import instagram from "../../assets/Svg/Instagram.svg";
import './FAQ.css';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import BreadCrumbs from '../../Components/BreadCrumbs';
import faqContentFetch from "../../Components/api/FaqContentfetch";
import ContactInfoFetch from "../../Components/api/getContactInfo";
import faqFetch from "../../Components/api/Faqfetch";

const FAQ = () => {
  const {data,error,loading}=faqFetch(localStorage.getItem("lang"))
  const {data1,error1,loading1}=ContactInfoFetch(localStorage.getItem("lang"))
  const {data2,error2,loading2}=faqContentFetch(localStorage.getItem("lang"))
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const toggleFAQ = index => {
    setSelected(selected === index ? null : index);
  };

  const createMarkup = (htmlContent) => {
  const formattedContent = htmlContent.replace(/\n/g, '<br />');
  return { __html: formattedContent };
};
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
              title: t("faq"),
              href: "/faq"
            },
          ]}/>
        </div>
        <div className="faq-container">
          <div className='faq-left'>
            <div className="faq-questions">
              {data?.map((faq, index) => (
                <div key={index} className="faq-question" onClick={() => toggleFAQ(index)}>
                  <div className="faq-header">
                    {selected === index ?
                      <>
                        <div className='faq-arrow'><img src={arrowUp} alt="" /></div>
                        <div className="faq-question-title faq-question-title-active">{faq?.question}</div>
                      </>
                      : <>
                        <div className='faq-arrow'><img src={arrowDown} alt="" /></div>
                        <div className="faq-question-title">{faq?.question}</div>
                      </>
                    }
                  </div>
                  {selected === index && (
                    <div className="faq-answer" dangerouslySetInnerHTML={createMarkup(faq?.answer)} />
                  )}
                </div>
              ))}
            </div>
            <div className='FAQ-footer'>
              <h5>{t("help")}</h5>
              {/* <div className='FAQ-contact-sosial'>
                <div className='FAQ-contact-us'>
                  <h6>+994 000 00 00</h6>
                  <h6>+994 000 00 00</h6>
                  <h6>info@112med.com</h6>
                </div>
                <div className='FAQ-sosial-icons'>
                  <img src={facebook} alt="" />
                  <img src={vk} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div> */}
            </div>
          </div>
          <div className='faq-right'>
            <div className="faq-detail">
              {selected !== null && (
                <div className="faq-answer-desktop" dangerouslySetInnerHTML={createMarkup(data[selected].answer)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

import React from "react";
import ContactInfoFetch from "../../Components/api/getContactInfo";
import { useTranslation } from "react-i18next";
import "../ContactUs/ContactUs.css";
import { Helmet } from "react-helmet";
import newMap from "../../assets/Images/GoogleMapTA 3.png";
import Contact from "./Contact";
import ContactUsForm from "./ContactUsForm";
import BreadCrumbs from "../../Components/BreadCrumbs";

const ContactUs = () => {
  const { data1 } = ContactInfoFetch();
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>112MED.ru | Официальный сайт | Клиники, врачи, онлайн-сервис по поиску и бронированию медицинских услуг, выгодные цены</title>
      </Helmet>
      <section className="contact-us">
        <div className="contact-us-container">
          <BreadCrumbs pageItems={[
            {
              title: t("home"),
              href: "/",
            },
            {
              title: t("contact"),
              href: "/contact-us"
            },
          ]}/>
          <div className="contact-us-area">
            <ContactUsForm/>
            <Contact data={data1}/>
          </div>
          <div style={{ width: "100%", height: "409px", backgroundColor: "#FBFBFB", padding: "40px", marginBottom: "20px" }}>
            <iframe
              style={{ border: "none" }}
              src={newMap}
              width="100%"
              height="323"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

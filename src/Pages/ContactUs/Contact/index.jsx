import React from 'react'
import { useTranslation } from 'react-i18next';
import './Contact.css'
import facebook from "../../../assets/Svg/facebook.svg";
import vk from "../../../assets/Svg/Vkontakte.svg";
import instagram from "../../../assets/Svg/Instagram.svg";

const Contact = ({data}) => {
  console.log('data:', data)
  const { t } = useTranslation();
  return (
    <div className='Contact-footer'>
        <h5>{t("help")}</h5>
        <div className='Contact-contact-sosial'>
            <div className='Contact-contact-us'>
                <h6>{data?.number}</h6>
                <h6>{data?.number_second}</h6>
                <h6>{data?.email}</h6>
            </div>
            <div className='Contact-sosial-icons'>
                <img src={facebook} alt="" />
                <img src={vk} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact
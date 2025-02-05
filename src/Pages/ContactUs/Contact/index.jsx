import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './Contact.css'
import facebook from "../../../assets/Svg/facebook.svg";
import vk from "../../../assets/Svg/Vkontakte.svg";
import instagram from "../../../assets/Svg/Instagram.svg";
import { fetchAllSocials } from "../../../store/reducers/socialsReducer";
import { fetchAllContact } from "../../../store/reducers/contactReducer";
import { useDispatch, useSelector } from 'react-redux';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';

const Contact = () => {
  const { data, loading, error } = useLanguageFetch('main/contact_info_description',localStorage.getItem("lang"));
  const dispatch = useDispatch();
  const { socials } = useSelector((state) => state.socials);
  const { contact } = useSelector((state) => state.contact);
  useEffect(()=>{
    dispatch(fetchAllSocials())
    dispatch(fetchAllContact())
  },[])
  const { t } = useTranslation();
  return (
    <div className='Contact-footer'>
        <h5>{t("help")}</h5>
        <div className='Contact-contact-sosial'>
          <div>
            <h5>
              {data?.text}
            </h5>
          </div>
          {(contact.number || contact.number_second || contact.email) && <div className='Contact-contact-us'>
            {contact.number && <h6>{contact.number}</h6>}
            {contact.number_second && <h6>{contact.number_second}</h6>}
            {contact.email && <h6>{contact?.email}</h6>}
        </div>}
          {(socials.facebook || socials.linkedin || socials.instagram) && <div className='Contact-sosial-icons'>
            {socials.facebook && <img onClick={()=>window.open(socials.facebook)}  src={facebook} alt="" />}
            {socials.linkedin && <img onClick={()=>window.open(socials.linkedin)} src={vk} alt="" />}
            {socials.instagram && <img onClick={()=>window.open(socials.instagram)} src={instagram} alt="" />}
          </div>}
        </div>
    </div>
  )
}

export default Contact
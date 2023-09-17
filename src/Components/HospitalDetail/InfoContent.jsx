import React from  'react';
import {Button, Divider} from "antd";
import infoIcon from '../../assets/Svg/info-green.svg'
import { useTranslation } from 'react-i18next';

const InfoContent = ({hospital,discount,open}) => {
  
 const {t}=useTranslation()
   return (
    <div className={"hospital__info-content container"}>
      <div className={"info__content-left"}>
        {discount.map((item)=>{
          return <h4 key={item.id} className={"info__content-left--title"}>{item.text}</h4>

        })}
        
        <p className={"info__content-left--subtitle"}>Чтобы сэкономить, просто забронируйте клинику.
          ОПИСАНИЕ КЛИНИКИ кроме телефона, сайта и электронной почты.</p>
        <div className={"info__content-left--desc"}>
          {/* {hospital.description} */}
        </div>
      </div>
      <div className={"info__content-right"}>
          <div className={"info__content-right--benefit"}>
            <h4 className={"info__content-right--benefit-title"}>{t("benefit")}</h4>
            <p className={"info__content-right--benefit-subtitle"}>идемьно подходит </p>
            <Divider style={{margin:"0.5rem 0"}}/>
            <ul>
              <li>{t("location")}</li>
              <li>{t("ecenomic")}</li>
              <li>{t("comission")}</li>
              <li>{t("bron2")}</li>
              <li>{t("bron3")}</li>
            </ul>
            <Button onClick={open} type={"primary"} style={{backgroundColor:"#5282FF", height:"61px", fontSize:"18px"}} block>{t("bron4")}</Button>
          </div>
          <div className={"info__content-right--info"}>
            <h4 className={"info__content-right--info-title"}>
              <img src={infoIcon} alt=""/>
              {t("maininformation")}</h4>
            <p className={"info__content-right--info-desc"}> {t("maininformation2")} </p>
          </div>
      </div>
    </div>
  );
};

export default InfoContent;

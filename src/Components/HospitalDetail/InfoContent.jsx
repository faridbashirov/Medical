import React from 'react';
import {Button, Divider} from "antd";
import infoIcon from '../../assets/Svg/info-green.svg'

const InfoContent = ({hospital}) => {
  return (
    <div className={"hospital__info-content container"}>
      <div className={"info__content-left"}>
        <h4 className={"info__content-left--title"}>Вы можете получить скидку до -40%!</h4>
        <p className={"info__content-left--subtitle"}>Чтобы сэкономить, просто забронируйте клинику.
          ОПИСАНИЕ КЛИНИКИ кроме телефона, сайта и электронной почты.</p>
        <div className={"info__content-left--desc"}>
          {hospital.description}
        </div>
      </div>
      <div className={"info__content-right"}>
          <div className={"info__content-right--benefit"}>
            <h4 className={"info__content-right--benefit-title"}>Преимущества этого варианта</h4>
            <p className={"info__content-right--benefit-subtitle"}>идемьно подходит </p>
            <Divider style={{margin:"0.5rem 0"}}/>
            <ul>
              <li>Отличное раположение</li>
              <li>Понятная экономия</li>
              <li>Бронирование без комисси</li>
              <li>Бронируйте сейчас, платите и на месте</li>
              <li>Бесплатное бронирование</li>
            </ul>
            <Button type={"primary"} style={{backgroundColor:"#5282FF", height:"61px", fontSize:"18px"}} block>Забронировать</Button>
          </div>
          <div className={"info__content-right--info"}>
            <h4 className={"info__content-right--info-title"}>
              <img src={infoIcon} alt=""/>
              Надежная информация</h4>
            <p className={"info__content-right--info-desc"}>Описание и фотографии этого варианта
              noностью соответствуют
              действительности. </p>
          </div>
      </div>
    </div>
  );
};

export default InfoContent;

import React from 'react';
import singleStar from "../../../assets/Svg/singleStar.svg"
import mainLogo from "../../../assets/Images/Vector.svg"
import { useTranslation } from 'react-i18next';
const QualityRating = ({hospital}) => {
  const {t}=useTranslation()
  return (
    <div className={"container"}>
      <div className="quality-rating">
        <div className="quality-rating__left">
          <div className="quality-rating__left-nums">
            <span className="quality-rating__left-num-main">{hospital?.raiting}</span>
            <img className="quality-rating__left-num-star" src={singleStar} alt=""/>
            <span className="quality-rating__left-num-slash">/</span>
            <span className="quality-rating__left-num-second">5</span>
          </div>
          <div className="quality-rating__left-stars">
            <img src={singleStar} alt=""/>
            <img src={singleStar} alt=""/>
            <img src={singleStar} alt=""/>
            <img src={singleStar} alt=""/>
            <img src={singleStar} alt=""/>
          </div>
          <div className="quality-rating__left-desc">112MED оценил качество</div>
        </div>
        <div className="quality-rating__right">
          <h4 className="quality-rating__right-title">{t("quality")}</h4>
          <p className="quality-rating__right-desc">{t("quality2")}</p>
        </div>
        <div className="quality-rating__icon">
          <img src={mainLogo} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default QualityRating;

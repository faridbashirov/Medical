import React from 'react';
import singleStar from "../../../assets/Svg/singleStar.svg"
import { useTranslation } from 'react-i18next';
import './QualityRating.css'
import { Rate } from 'antd';
const QualityRating = ({hospital}) => {
  const {t}=useTranslation()
  return (
    hospital?.raiting_count!==0 && <div className="quality-rating-section">
      <div className="quality-rating-container">
        <div className="quality-rating-left">
          <div className="quality-rating-area">
            <span className="quality-rating-area-big-number">{hospital?.raiting_count}</span>
            <div className='quality-rating-area-star'>
              <img src={singleStar} alt=""/>
              <div>
                <span>/</span>
                <span>5</span>
              </div>
            </div>
          </div>
          <div className='quality-raiting-stars'><Rate disabled={true} allowHalf value={hospital?.raiting_count}/></div>
          <div className="quality-rating-left-desc">112MED оценил качество</div>
        </div>
        <div className="quality-rating-right">
          <h4 className="quality-rating__right-title">{t("quality")}</h4>
          <p className="quality-rating__right-desc">{t("quality2", { value: hospital?.raiting_count})}</p>
        </div>
      </div>
    </div>
  );
};

export default QualityRating;

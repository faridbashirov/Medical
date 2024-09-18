import React from 'react';
import author from "../../../assets/Images/author.png"
import verify from "../../../assets/Svg/check-green.svg"
import { useTranslation } from 'react-i18next';
import './Questions.css';
const Questions = ({questions}) => {
  const {t}=useTranslation()
  console.log(questions, "salam")
  return (
    <>{questions.length>0 ? <section className="hospital-detail-questions-section">
      <div className="hospital-detail-questions-container">
        <div className='hospital-detail-questions-header'>
          <h4>{t("allquestions")}</h4>
          <p>{t("allanswers")}</p>
        </div>
        <div className='detail-questions-items'>
          {questions.map((item,index)=>{ 
              return <div key={item.id} className="detail-questions-item">
              <div className="detail-question detail-question-line">
                <div className="detail-question-header">
                  <div className="detail-question-header-author">
                    {author ? <img className='detail-question-header-profile' src={author} alt=""/> : <span>O</span>}
                    Оксана З.
                  </div>
                  <p className="detail-question-date">{item.question_time}</p>
                </div>
                <p className="detail-questions-content">{item.question}</p>
              </div>
              <div className="detail-question">
                <div className="detail-question-header">
                  <div className="detail-question-header-author">
                    {author ? <img className='detail-question-header-profile' src={author} alt=""/> : <span>O</span>}
                    Наталья П.
                    <img className='detail-question-header-profile-verify' src={verify} alt="" />
                  </div>
                </div>
                <p className="detail-questions-content">{item.question}</p>
                <div className="detail-questions-answer">
                  <p>Вам помог этот ответ?</p>
                  <div className='detail-questions-answer-footer'>
                    <div className='detail-questions-answer-buttons'>
                      <button>да 0</button>
                      <button>нет 2</button>
                    </div>
                    <div className="detail-question-date">{item.answer_time}</div>
                  </div>
                </div>
              </div>
            </div> 
            })}
        </div>
        {/* <button className={"detail-questions__btn"}>{t("allanswers2")}</button> */}
      </div>

    </section> : 
    <></>
  }</>
  );
};

export default Questions;

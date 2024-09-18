import React from 'react'
import './HospitalDetailHint.css'

const HospitalDetailHint = ({t}) => {
  return (
    <section className="hospital-detail-hint-section">
      <div className="hospital-detail-hint-container">
        <h4>{t("hint")}</h4>
        <p>{t("hint2")}</p>
      </div>
    </section>
  )
}

export default HospitalDetailHint
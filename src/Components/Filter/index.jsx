import React from 'react'
import {
  Collapse,
  Checkbox,
} from "antd";

const { Panel } = Collapse;

const index = ({handleCheckboxChange, country,t,selectedCountryValue,CountryChange,checkedValue,selectedRaitingValue,raitingChange,location}) => {
  return (
    <>
    <div
              className="menuNav menuNav-hospitals hospitals-sidebar"
            >
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB", color: "#084BC2" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      {t("search")}
                    </span>
                  }
                  key="1"
                >
                  <p style={{ margin: "0px", color: "#000", fontSize: "15px" }}>
                    {t("search2")}
                  </p>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox.Group style={{display:"block"}} value={selectedCountryValue} onChange={ CountryChange}>
                   {country.map((item,index)=>{
                    return <> <Checkbox value={item.name} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </p>
                  </Checkbox>
                  <br />
                  </>
                  
                   })}
                    
                  {/* <Checkbox value={"Turkey"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Турция
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"Russia"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Pоссия
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"Azerbaijan"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Aзербайджан
                    </p>
                  </Checkbox> */}
                  </Checkbox.Group>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                
             
                  <Checkbox  checked={checkedValue === 'doctor'}
        onChange={handleCheckboxChange}
        className={checkedValue === 'doctor' ? 'selected' : ''} value={"doctor"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                     {t('Doctors')}
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox checked={checkedValue === 'clinic'}
        onChange={handleCheckboxChange}
        className={checkedValue === 'clinic' ? 'selected' : ''} value={"clinic"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      {t('Clinics')}
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox checked={checkedValue === 'service'}
        onChange={handleCheckboxChange}
        className={checkedValue === 'service' ? 'selected' : ''} value={"service"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      {t('Services')}
                    </p>
                  </Checkbox>
                  <br />
                 
                
                
                  <br />
                </Panel>
              </Collapse>
              {/* <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                  marginTop: "10px",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Все фильтры
                    </span>
                  }
                  key="1"
                >
                  <p
                    style={{
                      margin: "0px",
                      color: "#084BC2",
                      fontSize: "18px",
                      fontWeight: 500,
                      fontFamily: "Inter",
                      fontStyle: "normal",
                    }}
                  >
                    Ваш бюджет
                  </p>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Минимальный $
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox  >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Средний $$
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Высокий $$$
                    </p>
                  </Checkbox>
                </Panel>
              </Collapse> */}
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
               
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 400,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      {t("stars")}
                    </span>
                  }
                  key="1"
                >
                    <Checkbox.Group style={{display:"block"}} value={selectedRaitingValue} onChange={raitingChange}>
                  <Checkbox value={"1"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      1 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"2"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                         2 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"3"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                       3 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"4"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                       4 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox value={"5"} >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                       5 звезды
                    </p>
                  </Checkbox>
                  </Checkbox.Group>
                
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
               
              </Collapse>
              {/* <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Оценка по отзывам
                    </span>
                  }
                  key="1"
                >
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Превосходно 9+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Очень хорошо 8+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Хороошо 7+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox >
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Достаточно хорошо 6+
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse> */}
              {location ? <div style={{ paddingTop: "10px" }} className="mapEmbed">
                <iframe
                  style={{ border: "none" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17439.59682519633!2d49.97557041806164!3d40.39300414904405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063737e96e061%3A0x5b925e8db0b28d35!2sBaku%20Medical%20Plaza!5e0!3m2!1sen!2saz!4v1682591396345!5m2!1sen!2saz"
                  width="325"
                  height="179"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              : <></>}
            </div>
    </>
  )
}

export default index
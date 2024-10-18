import React from 'react'
import {
  Collapse,
  Checkbox,
} from "antd";

const { Panel } = Collapse;

const index = ({handleCheckboxChange, country,t,selectedCountryValue,CountryChange,checkedValue}) => {
  return (
    <>
    <div className="menuNav menuNav-hospitals hospitals-sidebar">
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
            </div>
    </>
  )
}

export default index
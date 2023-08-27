import React,{useState,useEffect} from 'react';
import {Button, Divider, Form, Input, Modal, Typography} from "antd";

import {
  Dropdown,
Space,
  Breadcrumb,
  Pagination,
  Collapse,
  Checkbox,
} from "antd";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
const {Item} = Form
const { Panel } = Collapse;
import { useTranslation } from 'react-i18next';
const AllFiltersModal = ({openFilters,onCloseFilter,country}) => {
  const navigate = useNavigate()
  const {t,i18n}=useTranslation()
  const [searchParams,setSearchParams] = useSearchParams()
  const [selectedRaitingValue, setSelectedRaitingValue] = useState(searchParams.get("raiting")? searchParams.get("raiting").split(",") : []);
  const [selectedCountryValue, setSelectedCountryValue] = useState(searchParams.get("country")? searchParams.get("country").split(",") : []);
  
  const onFinish = (data) => {
    console.log(data)
    searchParams.delete("page");
    searchParams.delete("location")
    searchParams.delete("name")
     
    if (selectedRaitingValue.length === 0) {
      searchParams.delete("raiting");
    
    } else {
      searchParams.set("raiting", selectedRaitingValue);
    }

    if (selectedCountryValue.length === 0) {
      searchParams.delete("country");
    
    } else {
      searchParams.set("country", selectedCountryValue);
    }
    
    const newSearch = `?${searchParams.toString()}`;
    navigate({ search: newSearch });

  }
  const raitingChange = (value) => {
    
    setSelectedRaitingValue(value);
    
    };
    console.log(country);
 const CountryChange = (value) => {
      console.log(value);
      setSelectedCountryValue(value);
     
  
      };

  // useEffect(()=>{
  //     const getCountries=async()=>{
  //       const data= await allCountriesFetch(localStorage.getItem("lang"));

  //       setCountry(data)



  //     }
  //     getCountries()

  //   },[i18next.language])
  return (
    <Modal open={openFilters} onCancel={onCloseFilter} footer={[]}>
      <Typography className={'login-title'}>All Filters</Typography>
      <Divider/>
      <Form onFinish={onFinish}>
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
                   {country?.map((item,index)=>{
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

             
        <Button type={'primary'} htmlType={'submit'} block size={'large'}
                style={{display: 'block', marginBottom: '.5rem'}}>Filter</Button>
      </Form>
    </Modal>
  );
};

export default AllFiltersModal;

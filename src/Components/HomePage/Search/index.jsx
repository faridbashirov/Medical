import { useState } from 'react'; 
import './Search.css'
import {
  SearchOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";
import { Trans, useTranslation } from "react-i18next";
import { Button, Space, Input, Row, Col } from 'antd'
import useLanguageFetch from '../../../Hooks/useLanguageFetch'
import { useNavigate } from 'react-router-dom';



const Search = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const { data, loading, error } = useLanguageFetch('hospital/popular_search',localStorage.getItem("lang"));
    const [search,setSearch] = useState({
    type:"service",
    path:"/hospitals"
  })
    const [type,setType]=useState("")
    const [location,setLocation] = useState("")
    const [show,setShow] = useState(true)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const searchForm = (e) =>{
     navigate({
      pathname: search.path,
      search: `?type=${search.type}&location=${location}&name=${type}`,
    });
  }
  
  const onToggleClick = () => {
    
    if(show === false){
      setShow(!show)

      setSearch({
        path:"/hospitals",
        type:"service"
      })
     
    }
    
    setShow2(false);
    setShow3(false);
    
  };
  
  const onToggleClick2 = () => {
    setShow(false)
    if(show2 === false){
      setShow2(!show2);
      setSearch({
        path:"/hospitals",
        type:"clinic"
      })

    }
    
    setShow3(false);
  };
  
  const onToggleClick3 = () => {
    setShow(false)
    setShow2(false);
    if(show3 === false){
      setShow3(!show3);
      setSearch({
        path:"/doctors",
        type:"doctor"
      })

    }
    
  };
  const onChange = (e) => {
    setType(e.target.value)
  }
  const onChange2 = (e) => {
    setLocation(e.target.value)
  }
  const renderSearchItem = () => {
    return (
    <>
    <div id="bgHome">
                  <div className="container heroTitle">
                    <p className="fontMed">
                    <Trans i18nKey="booking">
                      </Trans>
                    </p>
                    <p className="text">{t("world")}</p>
                  </div>
                  <div id="marginBTN" className="container">
                    <Space>
                      <Button
                      onClick={onToggleClick}
                        className={show ? "btn_ activeBtn " :  "btn_  " }
                      >
                        {t("Services")}
                      </Button>
                      <Button
                      onClick={onToggleClick2}
                        className={show2 ? "btn_ activeBtn " :  "btn_ " }
                      >
                      {t("Clinics")}
                      </Button>
                      <Button
                      onClick={onToggleClick3}
                        className={show3 ? "btn_ activeBtn " :  "btn_ " }
                      >
                      {t("Doctors")}
                      </Button>
                    </Space>
                  </div>
                  <div id="inputDiv" className="container">
                    <div>
                      <Row gutter={12}>
                        <Col lg={12} xs={24} style={{marginBottom:"10px"}}>
                          <Input
                          onInput={onChange}
                          value={type}
                            size="large"
                            placeholder={t("searchinfo")}
                            prefix={
                              <SearchOutlined
                                style={{ fontSize: "23px", color: "#5282FF" }}
                              />
                            }
                            id="inputSearch"
                          />
                        </Col>
                        <Col lg={8} xs={12}>
                          <Input
                          onInput={onChange2}
                          value={location}
                            size="large"
                            placeholder={t("searchinfo2")}
                            prefix={
                              <EnvironmentOutlined
                                style={{ fontSize: "23px", color: "#5282FF" }}
                              />
                            }
                            id="inputEnviroment"
                          />
                        </Col>
                        <Col lg={4} xs={12}>
                          <Button onClick={()=>searchForm()} className="inputBtn" type="primary">
                            {t("search")}
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <div className="textFlex">
                    {data && data.map((item,index) => (
                        item.name ==search.type ?
                        item.category.map(innerItem => (
                        <Button key={index} onClick={()=>  navigate({
                          pathname: search.path,
                          search: `?type=${search.type}&name=${(innerItem.search)}`,
                        }) }  style={{ backgroundColor: "#F4F4F4" }} type="text">
                            {innerItem.search}
                            </Button>
                            )    )  : null
                          
                            )   )}
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "152px" }} className="container">
                  <Space wrap>
                    <p style={{ fontWeight: "600", fontSize: "20px", color: "#000" }}>
                      Поиск по:
                    </p>
                  <div>
                    <Button
                      className={"sortBtn sortActive"}
                      type="primary"
                    >
                      Hаправлениям
                    </Button>
                    <Button
                      className={"sortBtn"}
                      type="link"
                    >
                      Tипам
                    </Button>
                    <Button
                      className={"sortBtn"}
                      type="link"
                    >
                      Pейтингу
                    </Button>
                    <Button
                      className={"sortBtn"}
                      type="link"
                    >
                      Бюджету
                    </Button>
                  </div>
                  </Space>
                </div>
    </>);
  };
  if (loading) {
        return  <>
                {renderSearchItem()}
                </>
    }
    if (error) {
        return console.log("SearchError",error)
    }
    return (
        <div>
            {data ? (
                <>
                {renderSearchItem(data)}
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Search
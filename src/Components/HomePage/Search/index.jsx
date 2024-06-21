import { useState } from 'react'; 
import './Search.css';
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Trans, useTranslation } from "react-i18next";
import { Button, Space, Input, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import useLanguageFetch from '../../../Hooks/useLanguageFetch';

const Search = () => {
  const [popularSearch, setPopularSearch] = useState('hospital/service_search');
  const { data, loading, error } = useLanguageFetch(popularSearch,localStorage.getItem("lang"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    type: "service",
    path: "/hospitals"
  });
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const searchForm = () => {
    navigate({
      pathname: search.path,
      search: `?type=${search.type}&location=${location}&name=${type}`
    });
  };
  const onServiceToggleClick = () => {
    if (!show) {
      setShow(true);
      setSearch({ path: "/hospitals", type: "service" });
      setPopularSearch('hospital/service_search')
    }
    setShow2(false);
    setShow3(false);
  };

  const onClinicToggleClick = () => {
    setShow(false);
    if (!show2) {
      setShow2(true);
      setSearch({ path: "/hospitals", type: "clinic" });
      setPopularSearch('hospital/hospitals_search')
    }
    setShow3(false);
  };

  const onDoctorToggleClick = () => {
    setShow(false);
    setShow2(false);
    if (!show3) {
      setShow3(true);
      setSearch({ path: "/doctors", type: "doctor" });
      setPopularSearch('hospital/doctor_search')
    }
  };
  const onChange = (e) => setType(e.target.value);
  const onChange2 = (e) => setLocation(e.target.value);
  const navigateDoctorServiceClinic = (id,name) => {
    if (popularSearch==='hospital/service_search') {
      navigate(`hospitals?type=service&name=${name}`)
    }
    else if (popularSearch==='hospital/hospitals_search'){
      navigate(`/hospital/${id}`)
    }
    else{
      navigate(`hospitals?type=service&name=${name}`)
    }
  }
  return (
    <>
      <div id="bgHome">
        <div className="container heroTitle">
          <p className="heroTitle"><Trans i18nKey="booking"></Trans></p>
          <p className="searchTitle">{t("world")}</p>
        </div>
      </div>
      <div className='searchInputSection'>
        <div className='searchBar container'>
          <div id="marginBTN">
          <Space>
            <Button
              onClick={onServiceToggleClick}
              className={show ? "btn_ activeBtn " : "btn_ "}
            >
              {t("Services")}
            </Button>
            <Button
              onClick={onClinicToggleClick}
              className={show2 ? "btn_ activeBtn " : "btn_ "}
            >
              {t("Clinics")}
            </Button>
            <Button
              onClick={onDoctorToggleClick}
              className={show3 ? "btn_ activeBtn " : "btn_ "}
            >
              {t("Doctors")}
            </Button>
          </Space>
        </div>
        <div className="searchInputArea">
          <div>
            <Row className='searchInputAreaRow' gutter={[8, 8]}>
              <Col lg={12} xs={24} className='inputArea'>
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
                  className='inputSearchName'
                />
              </Col>
              <Col lg={8} xs={14} className='inputArea'>
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
                  className='inputSearchLocation'
                />
              </Col>
              <Col lg={4} xs={10} className="inputNewBtnCol">
                <Button onClick={searchForm} className="inputNewBtn" type="primary">
                  {t("search")}
                </Button>
              </Col>
            </Row>
            <div className='search-data-area'>
              {loading && <></>}
              {error && <p>Error: {error.message}</p>}
              {data && data.map((item) => (
                <div key={item.id} onClick={()=> navigateDoctorServiceClinic(item.id,item.name)}><span>{item.name}</span></div>
              ))}
            </div>
          </div>
        </div>
        </div>
        {/* <div className="container search-sort-buttons">
          <p className='search-sort-buttons-title'>
            {t('search-sort-title')}
          </p>
          <Space className='search-sort-buttons-space'>
            <Button className="sortBtn sortActive">
                {t("search-sort-btn-directions")}
              </Button>
              <Button className="sortBtn">
                {t("search-sort-btn-types")}
              </Button>
              <Button className="sortBtn">
                 {t("search-sort-btn-ratings")}
              </Button>
              <Button className="sortBtn">
                {t("search-sort-btn-budgets")}
              </Button>
          </Space>
      </div> */}
      </div>
    </>
  );
};

export default Search;

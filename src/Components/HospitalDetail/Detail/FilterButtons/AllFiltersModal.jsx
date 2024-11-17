import React, { useState } from 'react';
import { Button, Divider, Form, Modal, Typography, Collapse, Checkbox } from 'antd';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import uuid from 'react-uuid';

const { Panel } = Collapse;

const AllFiltersModal = ({ openFilters, onCloseFilter, country }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRaitingValue, setSelectedRaitingValue] = useState(searchParams.get('raiting') ? searchParams.get('raiting').split(',') : []);
  const [selectedCountryValue, setSelectedCountryValue] = useState(searchParams.get('country') ? searchParams.get('country').split(',') : []);

  const onFinish = (data) => {
  searchParams.delete("page");
  searchParams.delete("location");
  searchParams.delete("name");

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
  navigate(`/hospitals${newSearch}`);
};


  const raitingChange = (value) => {
    setSelectedRaitingValue(value);
  };

  const CountryChange = (value) => {
    setSelectedCountryValue(value);
  };

  return (
    <Modal open={openFilters} onCancel={onCloseFilter} footer={[]}>
      <Typography className="login-title">All Filters</Typography>
      <Divider />
      <Form onFinish={onFinish}>
        <Collapse
          expandIconPosition="end"
          bordered={false}
          style={{
            borderRadius: '0px',
            border: '1px solid #F0F0F0',
            backgroundColor: '#FBFBFB',
          }}
          accordion
        >
          <Panel
            style={{ backgroundColor: '#FBFBFB', color: '#084BC2' }}
            header={
              <span
                style={{
                  color: '#084BC2',
                  fontSize: '18px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                }}
              >
                {t('search')}
              </span>
            }
            key="1"
          >
            <p style={{ margin: '0px', color: '#000', fontSize: '15px' }}>{t('search2')}</p>
            <hr style={{ border: '1px solid #F0F0F0' }} />
            <Checkbox.Group style={{ display: 'block' }} value={selectedCountryValue} onChange={CountryChange}>
              {country?.map((item) => (
                <Checkbox key={uuid()} value={item.name}>
                  <p style={{ margin: '6px 0', color: '#000', fontSize: '16px' }}>{item.name}</p>
                </Checkbox>
              ))}
            </Checkbox.Group>
            <hr style={{ border: '1px solid #F0F0F0' }} />
          </Panel>
        </Collapse>

        <Button type="primary" htmlType="submit" block size="large" style={{ display: 'block', marginBottom: '.5rem' }}>
          Filter
        </Button>
      </Form>
    </Modal>
  );
};

export default AllFiltersModal;

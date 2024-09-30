import React, { useState, useEffect } from "react";
import mailIcon from "../../../assets/Svg/mailIcon.svg";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";
import getUserFetch from "../../../Components/api/getUser";
import { UserInfoUpdateFetch } from "../../../Components/api/userUpdate";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import "react-international-phone/style.css";
import { Button, Col, Row, Form, Input, DatePicker } from "antd";
import dayjs from "dayjs";

const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone) => {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phone, 'UA');
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
};

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const Info = () => {
  const { t } = useTranslation();
  const { data, loading } = getUserFetch();
  console.log(data, 'profiledata')
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [active, setActive] = useState(true);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setName(data?.first_name || "");
    setLastName(data?.last_name || "");
    setDate(data?.birthdate || "");
    setNumber(data?.phone_number || "");
  }, [data]);

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") setName(value);
    if (name === "lastName") setLastName(value);
    if (name === "date") setDate(value);
  };

  const handlePhoneChange = (value) => {
    setNumber(value);
  };

  useEffect(() => {
    if (
      name !== data?.first_name ||
      last_name !== data?.last_name ||
      date !== data?.birthdate ||
      number !== data?.phone_number
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [name, last_name, date, number, data]);

  // Validate inputs on change
  useEffect(() => {
    setError((prev) => ({
      ...prev,
      first_name: name?.trim().length === 0 ? "Please enter a name" : "",
      last_name: last_name?.trim().length === 0 ? "Please enter surname" : "",
      number: number?.trim().length === 0 || number?.trim().length < 7 ? "Please enter a valid number" : "",
    }));
    
    if (!name?.trim() || !last_name?.trim() || number?.trim().length < 7) {
      setActive(true);
    }
  }, [name, last_name, number]);

  const onFinish = async (values) => {
    if (!isPhoneValid(number)) {
      setError((prev) => ({
        ...prev,
        number: "Please enter a valid number",
      }));
      return;
    }

    const data = await UserInfoUpdateFetch(values);
    toast.success(t("updategesuc"), {
      toastId: "success1",
    });
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  const onChange = (date, dateString) => {
    setDate(date);
  };

  return (
    <>
      <div>
        <Form
          initialValues={{
            firstName: data?.first_name,
            lastName: data?.last_name,
            date: data?.birthdate ? dayjs(data?.birthdate) : "",
            number: data?.phone_number,
            email: data?.email,
          }}
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={8}>
            <Col span={12}>
              <MyFormItem name="firstName" label={t("name")}>
                <Input
                  name="firstName"
                  onChange={handlechange}
                  className="inputName"
                  placeholder="Имя"
                />
              </MyFormItem>
              {error?.first_name ? <div>{error?.first_name}</div> : ""}
            </Col>
            <Col span={12}>
              <MyFormItem name="lastName" label={t("surname")}>
                <Input
                  name="lastName"
                  onChange={handlechange}
                  placeholder="Фамилия "
                  className="lastInputName"
                />
              </MyFormItem>
              {error?.last_name ? <div>{error?.last_name}</div> : ""}
            </Col>
          </Row>
          <Row gutter={8}>
            <Col xs={15} sm={12}>
              <MyFormItem name="number" label={t("phonenumber")}>
                <PhoneInput
                      value={number}
                      onChange={handlePhoneChange}
                      name="number"
                      type="tel"
                    />
                    {error?.number ? <div>{error?.number}</div> : ""}
              </MyFormItem>
            </Col>
            <Col xs={9} sm={12}>
              <MyFormItem name="date" label={t("birthdate")}>
                <DatePicker
                  className="datePicker"
                  onChange={onChange}
                  dateFormat="YYYY-MM-DD"
                />
              </MyFormItem>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={24}>
              <MyFormItem name="email" label={t("mailadress")}>
                <Input
                  disabled={true}
                  suffix={<img src={mailIcon} alt="mail icon" />}
                  className="emailInput"
                />
              </MyFormItem>
            </Col>
          </Row>
          <Button
            disabled={active}
            style={{
              backgroundColor: "#5282FF",
              color: "white",
              width: "100%",
              height: "61px",
              fontSize: "20px",
            }}
            type="primary"
            htmlType="submit"
          >
            {t("update")}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Info;

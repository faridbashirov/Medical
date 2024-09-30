import React, { useState, useEffect } from "react";
import mailIcon from "../../../assets/Svg/mailIcon.svg";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";
import getUserFetch from "../../../Components/api/getUser";
import { UserInfoUpdateFetch } from "../../../Components/api/userUpdate";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Button, Col, Row, Form, Input, DatePicker } from "antd";
import dayjs from "dayjs";
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
  const [name, setName] = useState(""); 
  const [last_name, setLastName] = useState(""); 
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [active, setActive] = useState(true);
  const [error, setError] = useState({});

  const onFinish = async (values) => {
    const updatedData = {
      ...values,
      number: number,
    };
    const response = await UserInfoUpdateFetch(updatedData);
    if (response) {
      toast.success(t("updategesuc"), {
        toastId: "success1",
      });
    }
  };

  useEffect(() => {
    if (data) {
      setName(data.first_name || "");
      setLastName(data.last_name || "");
      setDate(data.birthdate || "");
      setNumber(data.phone_number || "");
    }
  }, [data]);

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setName(e.target.value);
    }
    if (e.target.name === "lastName") {
      setLastName(e.target.value);
    }
  };
  const handlePhoneChange = (phone) => {
    setNumber(phone); // Update the phone number state
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

  useEffect(() => {
    if (name?.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        first_name: "Please enter a name",
      }));
      setActive(true);
    } else {
      setError((prev) => ({
        ...prev,
        first_name: "",
      }));
    }

    if (last_name?.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        last_name: "Please enter surname",
      }));
      setActive(true);
    } else {
      setError((prev) => ({
        ...prev,
        last_name: "",
      }));
    }
  }, [name, last_name, number]);

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading ...</div>;
  }

  const onChange = (date) => {
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
          <Row gutter={16}>
            <Col span={12}>
              <MyFormItem name="firstName" label={t("name")}>
                <Input
                  name="firstName"
                  value={name}
                  onChange={handleChange}
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
                  value={last_name}
                  onChange={handleChange}
                  placeholder="Фамилия"
                  className="lastInputName"
                />
              </MyFormItem>
              {error?.last_name ? <div>{error?.last_name}</div> : ""}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <MyFormItem name="date" label={t("birthdate")}>
                <DatePicker
                  className="datePicker"
                  onChange={onChange}
                  dateFormat="YYYY-MM-DD"
                />
              </MyFormItem>
            </Col>
            <Col span={12}>
              <MyFormItem name="number" label={t("phonenumber")}>
                <PhoneInput
                  defaultCountry="ua"
                  value={number}
                  onChange={handlePhoneChange} // Update phone state
                />
                {error?.number ? <div>{error?.number}</div> : ""}
              </MyFormItem>
            </Col>
          </Row>
          <Row>
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

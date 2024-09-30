import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import './RegisterModal.css';
import { locationFetch } from '../api/locationFetch';
import { registerFetch } from '../api/registerFetch';
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-international-phone/style.css';

const { Item } = Form;

const ClientForm = ({ onCancel }) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [phoneValid, setPhoneValid] = useState(" ");
  const [counter, setCounter] = useState(0)
  const isPhoneValid = (phone) => {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phone);
    console.log(number, "isValid")
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
};
  
  const [number, setNumber] = useState('');
  const { t } = useTranslation();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [location, setLocation] = useState([]);
  const [error, setError] = useState({});
  
  useEffect(() => {
    async function getLocation() {
      const data = await locationFetch();
      setLocation(data);
    }
    getLocation();
  }, []);

  const options = location.map((item) => ({
    value: item.id,
    label: item.name,
  }))
  const handleRegistration = async (values) => {
    values.phone_number = number;
    if (isPhoneValid(number)) {
      const data = await registerFetch(values);
      if (data.Errors) {
        setError(data.Errors);
      }
      if (data.status === 201) {
        setError({});
        reset();
        onCancel();
        toast(t('succesreg'));
      }
    }
  };

  const handlePhoneChange = (value) => {
  setNumber(value);
  try {
    // Ensure the number includes a country code
    const newNumber = phoneUtil.parseAndKeepRawInput(value, "US"); // Default to US if unsure
    const numberValid = phoneUtil.isValidNumber(newNumber);
    setPhoneValid(numberValid);
    console.log(numberValid, "is valid");
  } catch (error) {
    console.error("Phone number error:", error.message);
    setPhoneValid(false); // Set invalid state if parsing fails
  }
};
const handleButton = () => {
    setCounter(1)
}

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Form onFinish={handleSubmit(handleRegistration)} className='register-modal'>
        {/* First Name */}
        <Item>
          <Controller
            name="first_name"
            control={control}
            rules={{ required: t('nameerror') }}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t('name')} />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.first_name?.message}</p>
        </Item>
        {/* Last Name */}
        <Item>
          <Controller
            name="last_name"
            control={control}
            rules={{ required: t('lastnameerror') }}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t('surname')} />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.last_name?.message}</p>
        </Item>
        {/* Email */}
        <Item>
          <Controller
            name="email"
            control={control}
            rules={{
              required: t('emailerror'),
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: t('validemail'),
              },
            }}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t('mailadress')} />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.email?.message}</p>
        </Item>
        {/* Phone Number */}
        <Item className='phone-number-register'>
          <PhoneInput
            name="phone_number"
            value={number}
            onChange={handlePhoneChange}
            type="tel"
          />
          <p style={{ color: 'red' }}>{(!phoneValid && counter!==0) ? t('phonenumber') : <></>}</p>
        </Item>

        {/* Username */}
        <Item>
          <Controller
            name="username"
            control={control}
            rules={{
              required: t('usernameerror'),
              minLength: {
                value: 3,
                message: t('length'),
              },
              maxLength: {
                value: 64,
                message: t('length'),
              },
            }}
            render={({ field }) => (
              <Input {...field} className="input" placeholder={t('username')} />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.username?.message}</p>
        </Item>

        {/* Location */}
        <Item>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Select {...field} options={options} className="input" placeholder={t('selectcountry')} />
            )}
          />
        </Item>

        {/* Password */}
        <Item>
          <Controller
            name="password"
            control={control}
            rules={{
              required: t('passworderror'),
              minLength: {
                value: 3,
                message: t('length'),
              },
              maxLength: {
                value: 64,
                message: t('length'),
              },
            }}
            render={({ field }) => (
              <Input.Password {...field} className="input" placeholder={t('password')} />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.password?.message}</p>
        </Item>

        <Button type="primary" htmlType="submit" block size="large" onClick={()=>{handleButton()}}>
          {t('register')}
        </Button>
      </Form>
    </>
  );
};

export default ClientForm;

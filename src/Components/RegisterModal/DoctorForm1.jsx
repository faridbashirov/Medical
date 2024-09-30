import React,{useState ,useEffect}from 'react';
import {Form, Input, Select,Button} from "antd";
import './RegisterMOdal.css'
import { hospitalFetch } from '../api/hospitalFetch';
import { positionFetch } from '../api/positionFetch';
import { locationFetch } from '../api/locationFetch';
import { doctorRegisterFetch } from '../api/doctorRegisterFetch';
import {toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Controller } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-international-phone/style.css';

const {Item} = Form
const DoctorForm = ({onCancel,keys}) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const [phoneValid, setPhoneValid] = useState(" ");
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState('');
  const isPhoneValid = (phone) => {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phone);
    console.log(number, "isValid")
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
};
  const {t}=useTranslation()
  const schema = Yup.object().shape({
    first_name: Yup.string()
        .label(t("name"))
        .trim()
        .required(t("nameerror"))
        .min(3,t("length"))
        .max(64),
    last_name:Yup.string()
    .label(t("surname"))
    .trim()
    .required(t("lastnameerror"))
    .min(3,(t("surname"),t("length")))
    .max(64),
    email:Yup.string()
    .label(t("mailadress")) 
    .email(t("validemail"))
    .trim()
    .required(t("emailerror"))
    ,
    username:Yup.string()
    .label(t("username"))
    .trim()
    .required(t("usernameerror"))
    .min(3,t("length"))
    .max(64),
    hospital:Yup.string()
    .label("Hospital")
    .required(t("hospitalserror")),
    position:Yup.string()
    .label("Position")
    .required(t("positionerror")),
    password:Yup.string()
    .label(t("password"))
    .min(3)
    .max(64)
    .required(t("passworderror"))
      })
  const {control, handleSubmit,formState: { errors },clearErrors } = useForm(
    ({
      mode: "onChange",
      
      resolver: yupResolver(schema),
    })
  )
  useEffect(()=>{
    clearErrors()
  },[])
  console.log(errors);
  const [location,setLocation]=useState([])
  const [hospital,setHospital]=useState([])
  const [position,setPosition]=useState([])
  const [error,setError] = useState({})
  const [dataerror,setDataError] = useState({})
  const [select,setSelect]=useState(1)
  const navigate = useNavigate()
  const handleRegistration = async(values) => {
    values.phone_number = number;
    if (isPhoneValid(number)) {
      const data = await doctorRegisterFetch(values)
      if(data.Errors){
      console.log("error");
            setError(data.Errors)}
    if(data.message){
      console.log("success");
                  setError({})
                  
                  onCancel()}
    }
  }
    const handlePhoneChange = (value) => {
  setNumber(value);
  try {
    const newNumber = phoneUtil.parseAndKeepRawInput(value, "US");
    const numberValid = phoneUtil.isValidNumber(newNumber);
    setPhoneValid(numberValid);
    console.log(numberValid, "is valid");
  } catch (error) {
    console.error("Phone number error:", error.message);
    setPhoneValid(false); 
  }
};
const handleButton = () => {
    setCounter(1)
}

   useEffect(()=>{
    async function getLocation(){
     const data = await locationFetch()
     setLocation(data)
    }
 
    getLocation()
   },[])

   useEffect(()=>{
    async function getHospital(){
     const data = await hospitalFetch()
     setHospital(data)
    }
 
    getHospital()
   },[])
   useEffect(()=>{
    async function getPosition(){
     const data = await positionFetch()
     setPosition(data)
    }
 
    getPosition()
   },[])
 
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
    <Form    onFinish={handleSubmit(handleRegistration)}  className='register-modal'>
    <Item className='flex items-start' style={{
      marginBottom: '10px',
      
    }}>
      <div style={{
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
      }}>
        <div style={{display:'flex',flexDirection:'column'}}>
      <Item style={{marginBottom:'3px'}}>
      <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("name")}  />
          )}
        />
        {/* <Input placeholder={'First Name'} name="first_name" className={'input'} {...register('first_name',{ required: "Name is required" })} /> */}
        
       </Item>
      <p style={{color:'red'}}>{errors?.first_name && errors.first_name.message}</p>
      {error.first_name ? <div
      style={{
        
        width: '100%',
        color:'red'
      }}>{error.first_name}</div> : ""}
      </div>
      </div>
      
      <div style={{
        display: 'inline-block',
        width: 'calc(50% - 0.5rem)',
        margin: '0 0 0 1rem',
      }}>
        <div style={{display:'flex',flexDirection:'column'}}>
      <Item style={{marginBottom:'3px'}}>
      <Controller
          name="last_name"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("surname")}  />
          )}
        />
      </Item>
      <p style={{color:'red'}}>{errors?.last_name && errors.last_name.message}</p>
      {error.last_name ? <div style={{
        width: '100%',
        color:'red',
      }}>{error.first_name}</div> : ""}
      </div>
      </div>
    </Item>
    <Item>
    <Controller
        name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("mailadress")}  />
        )}
    />  
    <p style={{color:'red'}}>{errors?.email && errors.email.message}</p>    
    </Item>
    {/* Phone Number */}
    <Item className='phone-number-register'>
      <PhoneInput
        name="phone_number"
        value={number}
        onChange={handlePhoneChange}
        type="tel"
      />
      <p style={{ color: 'red', paddingTop: "14px" }}>{(!phoneValid && counter!==0) ? t('phonenumber') : <></>}</p>
    </Item>
    {/*Username*/}
    <Item>
    <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input {...field} className="input" placeholder={t("username")}  />
          )}
        />
      <p style={{color:'red'}}>{errors?.username && errors.username.message}</p>
    </Item>
    {/*Password*/}
    <Item>
       <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password {...field}  placeholder={t("password")} name="password" className={'input'}/>
           
          )}
        />
        <p style={{color:'red'}}>{errors?.password && errors.password.message}</p>
    </Item>
    {/*Location*/}  
    <Item>
    <Controller
      name="location"
          rules={
            {required: "This field is required"}
          }
          control={control}
         
          render={({ field }) => (
            <Select
            
            // defaultActiveFirstOption={false}
           
             {...field} options={
              location.map((item)=>{
              return { value: item.id , label: item.name }})} name="location"  className="input" placeholder={t("selectcountry")}  />
      )}
      />
      {errors?.location && errors.location.message}
    </Item>
    {/*Position*/}  
    <Item>
    <Controller
          name="position"
          rules={
            {required: "This field is required"}
          }
          render={({ field }) => (
            <Select {...field} options={
              position.map((item)=>{
              return { value: item.id , label: item.name }})}  className="input" placeholder={t("selectposition")}  />
          )}
          
          control={control}
          
          onFocus={() => refReactSelect.current.focus()}
        />
        <p style={{color:'red'}}> {errors?.position && errors.position.message}</p>
    </Item>
    <Item name="hospital">
    <Controller
          name="hospital"
          render={({ field }) => (
            <Select {...field}  options={
              hospital.map((item)=>{
              return { value: item.id , label: item.name }})}
              
              className="input" placeholder={t("selecthospital")}  />
          )}
          
          control={control}
          rules={
            {required: "This field is required"}
          }
          onFocus={() => refReactSelect.current.focus()}
        />
    </Item>
    <p style={{color:'red'}}>{errors?.hospital && errors.hospital.message}</p>
    <Button type={'primary'} htmlType={'submit'} block size={'large'}
            style={{display: 'block', marginBottom: '.5rem'}} onClick={()=>{handleButton()}}>{t("register")}</Button>
    </Form>

    </>
    
  );
};

export default DoctorForm;

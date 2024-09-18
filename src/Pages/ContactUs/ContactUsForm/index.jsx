import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { contactFetch } from "../../../Components/api/contactFetch";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "./ContactUsForm.css";

const ContactUsForm = () => {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    first_name: Yup.string().trim().required(t("nameerror")),
    last_name: Yup.string().trim().required(t("lastnameerror")),
    email: Yup.string().email(t("validemail")).trim().required(t("emailerror")).max(64),
    text: Yup.string().trim().required(t("messageerror")).min(3, t("length")).max(64),
  });

  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState({});

  const handleRegistration = async (values) => {
    const data = await contactFetch(values);
    if (data.Errors) {
      setError(data.Errors);
    } else if (data.message) {
      reset();
      toast(t("messagesuc"));
      setError({});
    }
  };

  return (
    <div className="contact-us-form">
      <p className="write-us">{t("contact-us")}</p>
      <p className="contact-us-form-description">{t("profileinfo2")}</p>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="form-group-name">
            <div className="form-group">
                <label>{t("name")}</label>
                <Controller
                    name="first_name"
                    control={control}
                    render={({ field }) => (
                    <input {...field} className="input" placeholder="First Name *" />
                    )}
                />
                <p style={{ color: 'red' }}>{errors?.first_name?.message || error.first_name}</p>
            </div>
            <div className="form-group">
                <label>{t("surname")}</label>
                <Controller
                    name="last_name"
                    control={control}
                    render={({ field }) => (
                    <input {...field} className="input" placeholder="Last Name *" />
                    )}
                />
                <p style={{ color: 'red' }}>{errors?.last_name?.message || error.last_name}</p>
            </div>
        </div>
        <div className="form-group">
          <label>{t("mailadress")}</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input {...field} type="email" className="input" placeholder="Email" />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.email?.message || error.email}</p>
        </div>
        <div className="form-group">
          <label>{t("note")}</label>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <textarea {...field} className="input" placeholder="Message" />
            )}
          />
          <p style={{ color: 'red' }}>{errors?.text?.message}</p>
        </div>
        <button className="form-group-button" type="submit">
          {t("sendmessage")}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;

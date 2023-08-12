import React from 'react';
import {Breadcrumb} from "antd";
import { useTranslation } from 'react-i18next';

const BreadCrumbs = () => {
  const {t}=useTranslation()
  return (
    <div style={{ paddingTop: "30px" }} className="container">
      <div className={"breadcrumbs"}>
        <Breadcrumb
          separator={
            <span
              style={{
                color: "#5282FF",
                paddingLeft: "5px",
                paddingRight: "10px",
              }}
            >
                {" "}
              {">"}{" "}
              </span>
          }
          items={[
            {
              title:  t("home") 
,
              href: "/",
            },
            {
              title: t("Doctors"),
              href: "/doctors"
            },
            
          ]}
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;
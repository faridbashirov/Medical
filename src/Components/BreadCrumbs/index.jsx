import React from 'react';
import {Breadcrumb} from "antd";
import arrow from '../../assets/Svg/Arrow 6.svg'
import './BreadCrumbs.css'

const BreadCrumbs = ({pageItems}) => {
  return (
    <div>
      <div className={"bread-crumbs"}>
        <Breadcrumb
          separator={
            <img src={arrow} alt="" />
          }
          items={pageItems}
        />
      </div>
    </div>
  );
};

export default BreadCrumbs;

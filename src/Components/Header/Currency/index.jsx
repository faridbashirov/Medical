import React from 'react'
import USD from "../../../assets/Svg/usdIcon.svg";
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
const Currency = ({itemsCurrencyNew}) => {
  const {data} = useLanguageFetch('main/currency',localStorage.getItem("lang"));

  if (data) {
        itemsCurrencyNew = [
        {
            label: (
            <span
                style={{
                fontFamily: "Gilroy",
                fontSize: "16px",
                fontWeight: "600",
                color: "black"
                }}
            >
                USD
            </span>
            ),
            key: "1",
            icon: (
            <img
                style={{ width: "30px", objectFit: "cover" }}
                src={USD}
            />
            ),
        },
        ];
    }
}

export default Currency
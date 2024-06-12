import React from 'react'
import "./CategoryArea.css"
import rectangle from "../../../assets/Images/Rectangle-103.png"
import hospitaldetail from "../../../assets/Images/hospital-detail/hospital-detail-1.jpg"
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const CategoryArea = () => {
    const {t}=useTranslation()
    const navigate = useNavigate();
    const { data, loading, error } = useLanguageFetch('account/all_positions',localStorage.getItem("lang"));
    if (loading) {
        return  <>
                </>
    }
    if (error) {
        return console.log("CategoryArea:",error)
    }
    return (
        <div>
            {data ? (
                <>
                    <div style={{ paddingTop: "40px" }} className="container search-container">
                        <div className="grid">
                        <div className="box1 trans ">
                            <div className="box1_2">
                            <p className={"box1-text"}>
                            {data[0]?.name}
                            </p>
                            </div>
                            <div
                            className="box1_3"
                            >
                            <Button
                            onClick={()=> navigate({
                                pathname: "/hospitals",
                                search: `?type=service&name=${data[0]?.name}`,
                            })}
                                className={"box1-btn"}
                                type="primary"
                            >
                                {t("seemore")}
                            </Button>
                            </div>
                        </div>
                        {data.filter((item,index)=> index <4).map((item,index)=>{
                            return  <div key={index} onClick={()=> navigate({
                            pathname: "/hospitals",
                            search: `?type=service&name=${item?.name}`,
                            })} style={{
                            background:`url(${hospitaldetail}`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"cover",
                            cursor:"pointer",
                            position:"relative",
                            paddingLeft:"0"
                            
                            }} id="_box2" className="box2 trans">
                            <p style={{position:"absolute",zIndex:"10",bottom:"0px",left:"15px"}}>{item?.name} </p>
                            <img src={rectangle} style={{zIndex:"0",position:"absolute",width:"100%",bottom:"0"}} alt="" />
                        </div>
                        })}
                        </div>
                    </div>
                    <div className="container">
                        <div style={{ paddingTop: "30px" }} className="grid">
                        <div   className="box1 trans ">
                            <div className="box1_2">
                            <p className={"box1-text"}>
                            {data[5]?.name}
                            </p>
                            </div>
                            <div className="box1_3">
                            <Button onClick={()=> navigate({
                            pathname: "/hospitals",
                            search: `?type=service&name=${data[5]?.name}`,
                            })} className={"box1-btn"}
                                type="primary"
                            >
                                {t("seemore")}
                            </Button>
                            </div>
                        </div>
                        <div className="box1 trans trans">
                            <div className="box1_2">
                            <p className={"box1-text"}>
                            {data[6]?.name}
                            </p>
                            </div>
                            <div className="box1_3">
                            <Button onClick={()=> navigate({
                            pathname: "/hospitals",
                            search: `?type=service&name=${data[6]?.name}`,
                            })} className={"box1-btn"}
                                type="primary"
                            >
                                {t("seemore")}
                            </Button>
                            </div>
                        </div>
                        <div className="box1 trans trans">
                            <div className="box1_2">
                            <p className={"box1-text"}>
                            {data[7]?.name}
                            </p>
                            </div>
                            <div className="box1_3">
                            <Button onClick={()=> navigate({
                            pathname: "/hospitals",
                            search: `?type=service&name=${data[7]?.name}`,
                            })}
                                className={"box1-btn"}
                                type="primary"
                            >
                                {t("seemore")}
                            </Button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: "30px" }} className="container">
                        <div style={{
                        cursor:"pointer",
                        background:`linear-gradient(180deg, rgba(82, 130, 255, 0) 0%, #5282ff 100%), url(${data[8]?.image}) no-repeat top/cover`
                        }}  onClick={()=> navigate({
                            pathname: "/hospitals",
                            search: `?type=service&name=${data[1]?.name}`,

                            })} className="bgDoctor trans" >
                        <span>{data[8]?.name}</span>
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default CategoryArea
import React from 'react'
import "./CategoryArea.css"
import useLanguageFetch from '../../../Hooks/useLanguageFetch';
import { Button, Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import plastic from '../../../assets/Images/plastic surgeon.png';

const CategoryArea = () => {
    const {t}=useTranslation()
    const navigate = useNavigate();
    const { data, loading, error } = useLanguageFetch('account/all_positions',localStorage.getItem("lang"));
    if (loading) {
        return  <section className='categoryArea'>
            <div className="container search-container">
                        <div className='doctor-position-banner'>
                            <div className='banner-medium-smalls'>
                                <div className='banner-medium'>
                                    <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                                </div>
                                <div className='banner-smalls'>
                                    {[...Array(4)].map((_, index) => (
                                    <div className='banner-small'></div>
                                    ))}
                                </div>
                            </div>
                            <div className='banner-mediums'>
                                {[...Array(3)].map((_, index) => (
                            <div className='banner-medium'>
                                <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                            </div>
                      ))}
                            </div>
                            <div className='banner-big'></div>
                        </div>
                    </div>
                </section>
    }
    if (error) {
        return console.log("CategoryArea:",error)
    }
    console.log(data)
    return (
        <section className='categoryArea'>
            {data ? (
                <>
                    {/* <div className="container search-container">
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
                            <img src={item?.image} style={{zIndex:"0",position:"absolute",width:"100%",height: "100%",objectFit: 'cover',bottom:"0"}} alt="" />
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
                    </div> */}
                    <div className="container search-container">
                        <div className='doctor-position-banner'>
                            <div className='banner-medium-smalls'>
                                {data.filter((item)=> item.is_large==false && item.is_medium).slice(0, 1).map((item,index)=>{
                                        return  <div key={index} className='banner-medium'>
                                    <div className='banner-medium-left'>
                                        <p className='banner-medium-title'>{item?.name}</p>
                                        <Button onClick={()=> navigate({
                                        pathname: "/hospitals",
                                        search: `?type=service&name=${item?.name}`,
                                        })}
                                        className='banner-medium-button'
                                            type="primary"
                                        >
                                            {t("seemore")}
                                        </Button>
                                    </div>
                                    <div className='banner-medium-right'>
                                        <img src={item?.is_medium_image} alt="" />
                                    </div>
                                </div>
                                })}
                                <div className='banner-smalls'>
                                    {data.filter((item)=> item.is_large==false && item.is_medium==false).slice(0, 4).map((item,index)=>{
                                        return  <div key={index} className='banner-small' onClick={()=> navigate({
                                        pathname: "/hospitals",
                                        search: `?type=service&name=${item?.name}`,
                                        })}>
                                        <p className='banner-small-title'>{item?.name}</p>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    })}
                                </div>
                            </div>
                            <div className='banner-mediums'>
                                {data.filter((item)=> item.is_large==false && item.is_medium).slice(1, 4).map((item,index)=>{
                                        return  <div key={index} className='banner-medium'>
                                    <div className='banner-medium-left'>
                                        <p className='banner-medium-title'>{item?.name}</p>
                                        <Button onClick={()=> navigate({
                                        pathname: "/hospitals",
                                        search: `?type=service&name=${item?.name}`,
                                        })}
                                        className='banner-medium-button'
                                            type="primary"
                                        >
                                            {t("seemore")}
                                        </Button>
                                    </div>
                                    <div className='banner-medium-right'>
                                        <img src={item?.is_medium_image} alt="" />
                                    </div>
                                </div>
                                })}
                            </div>
                            {data.map((position, index)=>{
                                if(position.is_large){
                                    return <div key={index} className='banner-big' onClick={()=> navigate({
                                        pathname: "/hospitals",
                                        search: `?type=service&name=${position?.name}`,
                                        })}>
                                        <p className='banner-big-title'>{position?.name}</p>
                                        <img src={position?.image} alt="" />
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </section>
    );
}

export default CategoryArea
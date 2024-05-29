import React from 'react'
import { Link } from 'react-router-dom'
import './YouWillLikeThis.css'
import useLanguageFetch from '../../../Hooks/useLanguageFetch'
import { Skeleton } from 'antd';
import { useTranslation } from 'react-i18next';
const YouWillLikeThis = () => {
    const {t}=useTranslation()
    const { data, loading, error } = useLanguageFetch('main/liked_offer',localStorage.getItem("lang"));
    if (loading) {
        return  <>
                <div className="container">
                    <Skeleton active title={false} paragraph={{ rows: 1, width: '50%' }} className="deals-title" />
                    <div className="likethisSkeleton">
                        {[...Array(2)].map((_, index) => (
                            <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                        ))}
                    </div>
                    <div style={{ paddingTop: "15px" }} className="likethisSkeletonbig">
                        {[...Array(1)].map((_, index) => (
                                <Skeleton.Image active style={{height: '100%', width: '100%'}}/>
                        ))}
                    </div>
                </div>
                </>
    }
    if (error) {
        return console.log("YouWillLikeThisError",error)
    }
    return (
        <div>
            {data ? (
                <>
                    <div className="container">
                        <p className={"deals-title"}>
                        {t("liked")}
                        </p>
                        <div className="grid_3">
                        {data.filter((item,index)=> index <4 ).map((item,index)=>{
                        return <div className="trans" key={index}>
                        <Link to={item.link}> <img  src={item.image} /></Link> 
                        </div>
                        })}
                        </div>
                        <div style={{ paddingTop: "15px" }} className="grid_4">
                        {data.map((item,index)=>{
                        return    <div className="trans" key={index}>
                        <Link to={item.link}> <img style={{ width: "615px" }} src={item.image} /></Link>
                        </div>
                        })}
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default YouWillLikeThis
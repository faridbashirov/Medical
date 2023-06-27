import { Route,redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({})=>{
    console.log("welcome to PrivateRoute")
    const {user}=useSelector((state)=>state.auth)
    
    return (

        <>
        {user ? <Outlet/> :  <Navigate to={"/"}/>}


        </>

        
        
    )
}

export default PrivateRoute
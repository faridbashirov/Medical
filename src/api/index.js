import axios from "axios"
import { useSelector } from "react-redux";
const REACT_APP_BASE_URL = "https://hospitalbackend.efgroup.az/";

export const instance = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})





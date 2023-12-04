import { fetchHome, fetchErrorHome, fetchingHome } from "../slice/HomeSlice";

import axios from "axios";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchHome = () => {
    return async (dispatch)=>{
        try{
            
            dispatch(fetchingHome());   
            const response =await axios.get(URL + 'agency/getAll');            
            
            dispatch(fetchHome(response?.data));
        }
        catch(error){
            
            dispatch(fetchErrorHome(error ));
        }

    }
}
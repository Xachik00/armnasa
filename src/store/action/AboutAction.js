
import axios from "axios";
import { fetchAbout, fetchErrorAbout, fetchingAbout } from "../slice/AboutSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchAbout = () => {
    return async (dispatch)=>{
        try{
            
            dispatch(fetchingAbout());
            const response =await axios.get(URL + 'about/getAll');            
     
            dispatch(fetchAbout(response?.data));   
        }
        catch(error){
            
            dispatch(fetchErrorAbout(error ));
        }

    }
}
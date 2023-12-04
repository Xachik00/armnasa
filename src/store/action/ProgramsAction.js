
import axios from "axios";
import { fetchErrorPrograms, fetchPrograms, fetchingPrograms } from "../slice/ProgramsSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchPrograms = () => {
    return async (dispatch)=>{
        try{
            
            dispatch(fetchingPrograms());   
            const response =await axios.get(URL + 'programs/getAll');            
            
            dispatch(fetchPrograms(response?.data));
        }
        catch(error){
            
            dispatch(fetchErrorPrograms(error));
        }

    }
}

import axios from "axios";
import { fetchErrorAmade, fetchAmade, fetchingAmade} from "../slice/AmadeSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchAmade = () => {
    return async (dispatch)=>{
        try{
            
            dispatch(fetchingAmade());   
            const response =await axios.get(URL + 'amade/getAll');            
            
            dispatch(fetchAmade(response?.data));
        }
        catch(error){
            
            dispatch(fetchErrorAmade(error));
        }

    }
}
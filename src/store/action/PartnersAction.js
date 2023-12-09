
import axios from "axios";
import { fetchPartners, fetchErrorPartners, fetchingPartners } from "../slice/Partners";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchPartners = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingPartners());
      const response = await axios.get(URL + 'partners/getAllPartners');

      dispatch(fetchPartners(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorPartners(error));
    }

  }
}
export function AddPartner(obj) {
  return async ()=>{
    try {
      await axios.post(`${URL}partners/addPartners`, obj);
    } catch (error) {
      console.error(error)
    }
  }
  
}

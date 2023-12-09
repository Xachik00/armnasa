
import axios from "axios";
import { fetchLanguage, fetchErrorLanguage, fetchingLanguage } from "../slice/LanguageSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchLanguage = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingLanguage());
      const response = await axios.get(URL + `lezu/getAll`);
      dispatch(fetchLanguage(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorLanguage(error));
    }

  }
}





export  function AddLanguage(obj) {
return async()=>{
  try {
    await axios.post(`${URL}lezu/add`, obj);

  } catch (error) {
    console.error(error)
  }
}
}

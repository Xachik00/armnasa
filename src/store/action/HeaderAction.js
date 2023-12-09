
import axios from "axios";
import { fetchHeader, fetchErrorHeader, fetchingHeader } from "../slice/HeaderSlice";


const URL = process.env.REACT_APP_BASE_URL
let item = localStorage.getItem("language");
let language = JSON.parse(item)

export const getFetchHeader = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingHeader());
      const response = await axios.get(URL + `header/getAll/${language}`);
      console.log(response.data);
      dispatch(fetchHeader(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorHeader(error));
    }

  }
}





export  function AddHeaderLang(obj,setLoading,setSucces ) {
return async()=>{
  try {
    setLoading(true)
    await axios.post(`${URL}header/addHeader`, obj);
    setLoading(false)
    setSucces('ok')

  } catch (error) {
    console.error(error)
    setSucces(error)
  }
}
}

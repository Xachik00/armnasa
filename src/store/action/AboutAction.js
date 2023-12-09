
import axios from "axios";
import { fetchAbout, fetchErrorAbout, fetchingAbout } from "../slice/AboutSlice";


const URL = process.env.REACT_APP_BASE_URL

let item = localStorage.getItem("language");
let language = JSON.parse(item)
export const getFetchAbout = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingAbout());
      const response = await axios.get(URL + `about/getAll/${language||"US"}`);

      dispatch(fetchAbout(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorAbout(error));
    }

  }
}

export function EditAbout(obj) {
  return async()=>{
  try {
    console.log(obj);
    await axios.put(`${URL}about/${obj?.id}`, obj);
  } catch (error) {
    console.error(error)
  }
}
}

export function deleteAbout(id) {
  return async(dispatch)=>{
  try {
    await axios.delete(`${URL}about/${id}`);
    await dispatch(getFetchAbout())
  } catch (error) {
    console.error(error)
  }
}
}



export  function AddAbout(obj,setLoading,setSucces) {
return async()=>{
  try {
    setLoading(true)
    await axios.post(`${URL}about`, obj);
    setLoading(false)
    setSucces('ok')

  } catch (error) {
    setSucces(error)
    console.error(error)
  }
}
}

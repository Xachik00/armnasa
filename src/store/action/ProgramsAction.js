
import axios from "axios";
import { fetchErrorPrograms, fetchPrograms, fetchingPrograms } from "../slice/ProgramsSlice";


const URL = process.env.REACT_APP_BASE_URL
let item = localStorage.getItem("language");
let language = JSON.parse(item)

export const getFetchPrograms = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingPrograms());
      const response = await axios.get(URL + `programs/getAll/${language}`);

      dispatch(fetchPrograms(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorPrograms(error));
    }

  }
}

export function EditPrograms(obj) {
  return async()=>{
  try {
    console.log(obj);
    await axios.put(`${URL}programs/${obj?.id}`, obj);
  } catch (error) {
    console.error(error)
  }
}
}
export function deletePrograms(id) {
  return async(dispatch)=>{
  try {
    await axios.delete(`${URL}programs/${id}`);
    dispatch(getFetchPrograms())
  } catch (error) {
    console.error(error)
  }
}
}


    export function AddPrograms(obj,setLoading, setSucces ) {
return async()=>{
  try {
    setLoading(true)
    await axios.post(`${URL}programs`, obj);
    setLoading(false)
    setSucces('ok')

  } catch (error) {
    setSucces(error)

    console.error(error)
  }
}
}
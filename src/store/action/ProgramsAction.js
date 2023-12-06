
import axios from "axios";
import { fetchErrorPrograms, fetchPrograms, fetchingPrograms } from "../slice/ProgramsSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchPrograms = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingPrograms());
      const response = await axios.get(URL + 'programs/getAll');

      dispatch(fetchPrograms(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorPrograms(error));
    }

  }
}

export async function EditPrograms(obj) {

  try {
    console.log(obj);
    await axios.put(`${URL}programs/${obj?.id}`, obj);
  } catch (error) {
    console.error(error)
  }
}
export async function deletePrograms(id) {

  try {
    await axios.delete(`${URL}programs/${id}`);
  } catch (error) {
    console.error(error)
  }
}


export async function AddPrograms(obj) {

  try {
    await axios.post(`${URL}programs`, obj);
  } catch (error) {
    console.error(error)
  }
}
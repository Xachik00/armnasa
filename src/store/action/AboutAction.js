
import axios from "axios";
import { fetchAbout, fetchErrorAbout, fetchingAbout } from "../slice/AboutSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchAbout = () => {
  return async (dispatch) => {
    try {

      dispatch(fetchingAbout());
      const response = await axios.get(URL + 'about/getAll');

      dispatch(fetchAbout(response?.data));
    }
    catch (error) {

      dispatch(fetchErrorAbout(error));
    }

  }
}

export async function EditAbout(obj) {

  try {
    console.log(obj);
    await axios.put(`${URL}about/${obj?.id}`, obj);
  } catch (error) {
    console.error(error)
  }
}

export async function deleteAbout(id) {

  try {
    await axios.delete(`${URL}about/${id}`);
  } catch (error) {
    console.error(error)
  }
}



export async function AddAbout(obj) {

  try {
    await axios.post(`${URL}about`, obj);
  } catch (error) {
    console.error(error)
  }
}

import { fetchHome, fetchErrorHome, fetchingHome } from "../slice/HomeSlice";
import Swal from "sweetalert2";
import axios from "axios";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchHome = () => {
    return async (dispatch)=>{
        try{
            
            dispatch(fetchingHome());   
            const response =await axios.get(URL + 'agency/getAll');            
            
            dispatch(fetchHome(response?.data));
        }
        catch(error){
            
            dispatch(fetchErrorHome(error ));
        }

    }
}





  
 export async function DeleteItem({ title, text, deleteItem }) {
    Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText:"Ոչ",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Այո",
    }).then((result) => {
      if (result?.isConfirmed) {
        deleteItem();
      }
    });
  }
  export function EditHome(obj) {
    return async()=>{
    try {
        console.log(obj);
      await axios.put(`${URL}agency/${obj?.id}`,obj);
    } catch (error) {
        console.error(error )
    }
  }
  }

  export function deleteHome(id) {
    return async()=>{
    try {
      await axios.delete(`${URL}agency/${id}`);
    } catch (error) {
        console.error(error)
    }
  }
  }
  export const AddHome = (obj) => {
    return async () => {
        console.log(obj);
        try {
            await axios.post(URL + `agency`,obj);
        }
        catch (error) {
            console?.error(error)
        }
    }
}
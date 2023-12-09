
import axios from "axios";
import { fetchContact, fetchErrorContact, fetchingContact } from "../slice/ContactSlice";

const URL = process.env.REACT_APP_BASE_URL


export const sendMail = (obj,setLoading,setSucces) => {
    return async () => {
        try {
            setLoading(true)
             await axios.post(URL + `chat/addMessage`,obj);
            setLoading(false);
            setSucces("ok");

        }
        catch (error) {
            setSucces(error);
            console?.error(error);
        }
    }
}
export const getContact = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchingContact());
            const res =  await axios.get(URL + `contact/getAll`);
            dispatch (fetchContact(res?.data));

        }
        catch (error) {
            console?.error(error);
            dispatch(fetchErrorContact(error))
        }
    }
}



export const EditContact = (id,obj) => {
    return async () => {
        delete obj?.id
        try {
              await axios.put(URL + `contact/put/${id}`,obj);
        }
        catch (error) {
            console?.error(error);
        }
    }
}
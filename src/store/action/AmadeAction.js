
import axios from "axios";
import { fetchErrorAmade, fetchAmade, fetchingAmade } from "../slice/AmadeSlice";


const URL = process.env.REACT_APP_BASE_URL

let item = localStorage.getItem("language");
let language = JSON.parse(item)
export const getFetchAmade = () => {
    return async (dispatch) => {
        try {

            dispatch(fetchingAmade());
            const response = await axios.get(URL +  `amade/getAll/${language||"US"}`);

            dispatch(fetchAmade(response?.data));
        }
        catch (error) {

            dispatch(fetchErrorAmade(error));
        }

    }
}
export const DeleteAmade = (id) => {
    return async (dispatch) => {
        try {

            await axios.delete(URL+`amade/${id}`);
            await dispatch(getFetchAmade())
        }
        catch (error) {

        }

    }
} 
export const EditAmade = (obj) => {
    return async () => {
        try {
            await axios.put(URL + `amade/${obj?.id}`,obj);
        }
        catch (error) {
            console?.error(error)
        }
    }
}
    export const AddAmade = (obj,setLoading,setSucces ) => {
    return async () => {
        try {
            setLoading(true)
            await axios.post(URL + `amade`,obj);
            setLoading(false)
    setSucces('ok')

        }
        catch (error) {
            console?.error(error)
    setSucces(error)

        }
    }
}
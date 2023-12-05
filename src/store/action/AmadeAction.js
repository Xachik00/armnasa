
import axios from "axios";
import { fetchErrorAmade, fetchAmade, fetchingAmade } from "../slice/AmadeSlice";


const URL = process.env.REACT_APP_BASE_URL


export const getFetchAmade = () => {
    return async (dispatch) => {
        try {

            dispatch(fetchingAmade());
            const response = await axios.get(URL + 'amade/getAll');

            dispatch(fetchAmade(response?.data));
        }
        catch (error) {

            dispatch(fetchErrorAmade(error));
        }

    }
}
export const DeleteAmade = (id) => {
    return async () => {
        try {

            await axios.delete(URL+`amade/getAll${id}`);
        }
        catch (error) {

        }

    }
} 
export const EditAmade = (obj) => {
    return async () => {
        try {
            await axios.put(URL + `amade/getAll${obj?.id}`,obj);
        }
        catch (error) {
            console?.error(error)
        }
    }
}
export const AddAmade = (obj) => {
    return async () => {
        try {
            await axios.post(URL + `amade/getAll`,obj);
        }
        catch (error) {
            console?.error(error)
        }
    }
}
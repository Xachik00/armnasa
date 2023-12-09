
import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL


export const sendMail = (obj,setLoading,setSucces) => {
    return async () => {
        try {
            setLoading(true)
             await axios.post(URL + `amade/getAll`,obj);
            setLoading(false);
            setSucces("ok");

        }
        catch (error) {
            setSucces(error);
            console?.error(error);
        }
    }
}
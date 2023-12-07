
import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL


export const sendMail = (obj) => {
    return async () => {
        try {
            await axios.post(URL + `amade/getAll`,obj);
        }
        catch (error) {
            console?.error(error)
        }
    }
}
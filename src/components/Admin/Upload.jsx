import { useDispatch } from "react-redux";
import { uploadImageHandleradd } from "../../store/action/UploadImage";

export function  Upload({name,setImg,id}) {

    const dispatch = useDispatch();
    const  uploadImageHandler  = async (e) => {
        console.log(e.target.files[0],'e');
        dispatch(uploadImageHandleradd(e,setImg));
    };

    return (

        <div className="w-auto h-auto" onClick={()=>{console.log(id,'uppp');}} >
            <label htmlFor={name+id} className=" text-white flex justify-center items-center bg-gray-500 cursor-pointer hover:bg-gray-700">{name}</label>
            <input type="file" accept="image/*" id={name+id} name={name+id} value={""} style={{display:'none'}} onChange={uploadImageHandler} />
        </div>
    );
}
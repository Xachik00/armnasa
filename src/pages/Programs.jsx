import React, { useEffect, useState } from "react";
import Slide from "../components/partnerSlide/Slide";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { EditPrograms, deletePrograms, getFetchPrograms } from "../store/action/ProgramsAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { DeleteItem, uploadImageHandleradd } from "../store/action/HomeAction";


const Programs = () => {
  document.title = "Programs | Armenian Nasa";
  const {Programs} = useSelector((state)=>state?.Programs);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFetchPrograms())
  },[dispatch])

  const [indexArray, setIndexArray] = useState([0]);
  const [edit, setEdit] = useState("");
  const [img, setImg] = useState('');

  useEffect(() => {
    if(img){
    setEdit({ ...edit, picture: img });
    }
  }, [img]);


  async function   editPrograms() {
   await EditPrograms(edit)

    dispatch(getFetchPrograms());
    setEdit('')
  }
  async function deleteItem(id) {
  await  DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => deletePrograms(id),
    });
    dispatch(getFetchPrograms());

  }
  return (
    <div
      className=" min-h-[80vh] flex justify-center bg-repeat-y bg-[length:100%_auto]"
      style={{ backgroundImage: `url('/Images/gif3.gif')` }}
    >
      <div className=" w-[1600px] text-white  bg-[#4949598b] p-4">
        <h1 className=" text-[55px] text-blue-500 mt-5 felx text-center">
          AASA Programs
        </h1>
        <div className=" grid grid-cols-2  justify-center  gap-[110px] p-5">
          {  !edit &&
            Programs?.map((el, index) => (
              <div
                key={index}
                className={`${
                  ( index===0 || index%3===0) ? "col-span-2" : "col-span-1"
                } flex flex-col gap-5  justify-start  `}
              >
                <img src={el.picture} alt="" className=" rounded-[12px]" />
                <h2 className=" text-[24px]">{el.title}</h2>
                <p className=" text-[18px]">{el.text}</p>
                {
                  <div>
                    <EditOutlined onClick={() => setEdit(el)} />
                    <DeleteOutlined onClick={()=> deleteItem(el.id)} />
                  </div>
                }
              </div>
            ))}
        </div>
        {edit && (
            <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
              {/* <img src={edit?.picture} alt="" className=" rounded-[12px]" /> */}
              {edit?.picture && (
            <label className=" w-[40%] flex justify-center" htmlFor="EditLogo">
              <img className=""  src={img ? img : edit?.picture} alt="logo" />
            </label>
          )}
          <input
            className="hidden"
            type="file"
            name="EditLogo" 
            id="EditLogo"
            onChange={(e) => {
              uploadImageHandleradd(e, setImg);
            }}
            accept="image/*"
          />
              <textarea
                name="title"
                rows="2" className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"

                type="text"
                value={edit?.title}
                onChange={(e) => setEdit({ ...edit,[e.target.name]:e.target.value })}
              />
              <textarea
                name="text"
                rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"

                value={edit?.text}
                onChange={(e) => setEdit({ ...edit,[e.target.name]:e.target.value})}

              />
              {
                <div>
                  <CheckOutlined 
                    onClick={() => {
                     editPrograms()
                    }}
                  />{" "}
                <CloseOutlined onClick={()=>setEdit('')} />
                </div>
              }
            </div>
          )}
        <Slide />
      </div>
    </div>
  );
};

export default Programs;

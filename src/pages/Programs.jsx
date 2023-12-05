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

  useEffect(() => {
    if (indexArray.length === 1) {
        Programs?.map((el, index) => {
        if (indexArray[indexArray.length - 1] + 3 === index) {
          setIndexArray([...indexArray, index]);
        }
      });
    }
  }, [Programs]);

  function   editPrograms() {
    EditPrograms(edit)

    dispatch(getFetchPrograms());
    setEdit('')
  }
  async function deleteItem(id) {
    DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => deletePrograms(id),
    });
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
          {indexArray.length > 1 &&  !edit &&
            Programs?.map((el, index) => (
              <div
                key={index}
                className={`${
                  indexArray.includes(index) ? "col-span-2" : "col-span-1"
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
                className=" text-[20px] sm:text-[18px] w-[60%] m-5 resize-none"
                type="text"
                value={edit?.title}
                onChange={(e) => setEdit({ ...edit,[e.target.name]:e.target.value })}
              />
              <textarea
                name="text"
                className=" text-4 sm:text-[18px]  w-[60%] h-[10rem] resize-none"
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

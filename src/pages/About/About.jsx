import React, { useEffect, useState } from "react";
import Slide from "../../components/partnerSlide/Slide";
import { useDispatch, useSelector } from "react-redux";
import { EditAbout, deleteAbout, getFetchAbout } from "../../store/action/AboutAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { DeleteItem, uploadImageHandleradd } from "../../store/action/HomeAction";
const About = () => {
  document.title = "About | Armenian Nasa";

  const { About } = useSelector((state) => state.About);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchAbout());
  }, [dispatch]);

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
      About?.map((el, index) => {
        if (indexArray[indexArray.length - 1] + 3 === index) {
          setIndexArray([...indexArray, index]);
        }
      });
    }
  }, [About]);


  function   editAbout() {
    EditAbout(edit)

    dispatch(getFetchAbout());
    setEdit('')
  }
  async function deleteItem(id) {
    DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => deleteAbout(id),
    });
  }

  return (
    <div
      className=" w-full min-h-[80vh]  flex flex-col justify-center items-center text-white "
      style={{ backgroundImage: `url('/Images/gif3.gif')` }}
    >
      <div className="max-w-[1600px] bg-[#4949598b] p-4 mx-auto">
        <h1 className=" text-[35px] sm:text-[55px] text-blue-500 mt-5 felx text-center">
          About AASA{" "}
        </h1>

        <div className=" grid grid-cols-2  justify-center  gap-10 sm:gap-[110px] p-5">
          {indexArray.length > 1 &&
            !edit &&
            About?.map((el, index) => (
              <div
                key={index}
                className={`${
                  indexArray.includes(index)
                    ? "col-span-2"
                    : "sm:col-span-1 col-span-2"
                } flex flex-col gap-2 sm:gap-5  justify-start  `}
              >
                <img src={el?.picture} alt="" className=" rounded-[12px]" />
                <h2 className=" text-[20px] sm:text-[24px]">{el?.title}</h2>
                <p className=" text-4 sm:text-[18px]">{el?.text}</p>
                {
                  <div>
                    <EditOutlined onClick={() => setEdit(el)} />{" "}
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
                     editAbout()
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

export default About;

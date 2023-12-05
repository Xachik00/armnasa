import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteItem, EditHome, deleteHome, getFetchHome, uploadImageHandleradd } from "../store/action/HomeAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Home = () => {
    
  const { Home } = useSelector((state) => state.Home);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");
  const [img, setImg] = useState('');

  useEffect(() => {
    if(img){
    setEdit({ ...edit, picture: img });
    }
  }, [img]);
  console.log(Home);
  useEffect(() => {
    dispatch(getFetchHome());
  }, [dispatch]);

  async function   editHome() {
   await  EditHome(edit)

    dispatch(getFetchHome());
    setEdit('')
  }
  async function deleteItem(id) {
  await   DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => deleteHome(id),
    });
    dispatch(getFetchHome());

  }
  return (
    <div
      className="  w-full min-h-[60vh] sm:min-h-[80vh] flex justify-center items-center"
      style={{ background: `url(${Home[0]?.picture})` }}
    >
      <div className=" sm:w-[43%] text-center">
        { !edit &&Home?.map((el, index) => {
          return (
            <div key={index + 1} className="flex flex-col items-center">
              <h1 className=" text-blue-500 text-[35px] sm:text-[55px]">
                {Home[0]?.title}
              </h1>
              <p className=" text-[20px] sm:text-[30px]  text-white">
                {Home[0]?.text}
              </p>
              {
                  <div className="w-[100px] flex justify-between mt-4">
                    <EditOutlined onClick={() => setEdit(el)} />
                    <DeleteOutlined onClick={()=> deleteItem(el.id)} />
                  </div>
                }
            </div>
            
          );
        })}
          {edit && (
            <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
              {/* <img src={edit?.picture} alt="" className=" rounded-[12px]" /> */}
              {edit?.picture && (
            <label className="w-[40%] flex justify-center" htmlFor="EditLogo">
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
                     editHome()
                    }}
                  />{" "}
                <CloseOutlined onClick={()=>setEdit('')} />
                </div>
              }
            </div>
          )}
      </div>

    </div>
  );
};

export default Home;

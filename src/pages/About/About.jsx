import React, { useEffect, useState } from "react";
import Slide from "../../components/partnerSlide/Slide";
import { useDispatch, useSelector } from "react-redux";

import { AddAbout, EditAbout, deleteAbout, getFetchAbout } from "../../store/action/AboutAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { DeleteItem } from "../../store/action/HomeAction";
import { uploadImageHandleradd } from "../../store/action/UploadImage";
const About = () => {
  document.title = "About | Armenian Nasa";

  const { About } = useSelector((state) => state.About);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchAbout());
  }, [dispatch]);

  const [edit, setEdit] = useState("");
  const [addShow, setAddShow] = useState(false);
  const [add, setAdd] = useState({});
  const [langText, setLangText] = useState({ info: [], tableName: "about" });
  const [img, setImg] = useState("");
  const [lng, setLng] = useState(localStorage.getItem("addLang"));

  useEffect(() => {
    if (img) {
      setEdit({ ...edit, picture: img });
    }
  }, [img]);

  async function editAbout() {
    await EditAbout(edit);
    dispatch(getFetchAbout());
    setEdit("");
  }
  async function deleteItem(id) {
    await DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => deleteAbout(id),
    });
    dispatch(getFetchAbout());
  }

  async function addData() {
    const obj = {
      ...add,
      picture: img,
    };
    await dispatch(AddAbout(obj));
    setAddShow(false);
    setAdd({
      title: "",
      text: "",
    });
    await dispatch(getFetchAbout());
  }
  useEffect(() => {
    handleLanguageChange();
  }, [localStorage.getItem("addLang")]);

  function handleLanguageChange() {
    let language = localStorage.getItem("addLang");

    setLng(JSON.parse(language));
  }

  useEffect(() => {
    handleLanguageChange1();
  }, [localStorage.getItem("selectLang")]);

  function handleLanguageChange1() {
    let language = localStorage.getItem("selectLang");
    let item = JSON.parse(language);
    setLangText({ ...langText, language: item });
  }
  async function getItemCount() {
    let arr = [...langText.info];
    for (let i = 0; i < About.length; i++) {
      arr.push({
        title: "",
        text: "",
      });
    }
    setLangText({ ...langText, info: arr });
  }
  async function addlangText(e, index) {
    if (!langText.info.length) {
      await getItemCount();
    }
    if (langText.info.length === About.length) {
      let newText = { ...langText };
      newText.info[index][e.name] = e.value;
      setLangText(newText);
    }
  }

  console.log(lng);
  return (
    <div
      className={
        lng
          ? "w-[70%] p-2  text-white"
          : " w-full min-h-[80vh]  flex flex-col justify-center items-center text-white "
      }
      style={{ backgroundImage: `url('/Images/gif3.gif')` }}
    >
      {!addShow ? (
        <div
          className={
            lng
              ? "w-[100%]  bg-[#4949598b]"
              : "max-w-[1600px] bg-[#4949598b] p-4 mx-auto"
          }
        >
          <h1 className=" text-[35px] sm:text-[55px] text-blue-500 mt-5 felx text-center">
            About AASA
          </h1>

          <div className=" grid grid-cols-2  justify-center  gap-10 sm:gap-[110px] p-5">
            {!edit &&
              About?.map((el, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 || index % 3 === 0
                      ? "col-span-2"
                      : "sm:col-span-1 col-span-2"
                  } flex flex-col gap-2 sm:gap-5  justify-start items-center `}
                >
                  <img src={el?.picture} alt="" className=" rounded-[12px]" />
                  <h2 className=" text-[20px] sm:text-[24px]">{el?.title}</h2>
                  <p className=" text-4 sm:text-[18px]">{el?.text}</p>
                  {!lng && (
                    <div className="w-[100px] flex justify-between mt-4">
                      <EditOutlined onClick={() => setEdit(el)} />
                      <DeleteOutlined onClick={() => deleteItem(el.id)} />
                    </div>
                  )}
                  {lng && (
                    <div className="container">
                      <h1 className="text-white text-lg text-center mt-4">
                        Add Traslate Data
                      </h1>
                      <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
                        <textarea
                          name="title"
                          rows="2"
                          className="block p-2.5 my-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                          type="text"
                          value={langText.info[index]?.title}
                          placeholder="Title"
                          onChange={(e) => {
                            addlangText(e.target, index);
                          }}
                        />
                        <textarea
                          name="text"
                          placeholder="Text"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                          value={langText.info[index]?.text}
                          onChange={(e) => {
                            addlangText(e.target, index);
                          }}
                        />
                        {
                          <div className=" w-[30%] mt-4 flex justify-between text-white ">
                            <CheckOutlined
                              onClick={() => {}}
                              className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                            />
                            <CloseOutlined
                              onClick={() => setAddShow(false)}
                              className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                            />
                          </div>
                        }
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          {edit && (
            <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
              {/* <img src={edit?.picture} alt="" className=" rounded-[12px]" /> */}
              {edit?.picture && (
                <label
                  className=" w-[40%] flex justify-center"
                  htmlFor="EditLogo"
                >
                  <img
                    className=""
                    src={img ? img : edit?.picture}
                    alt="logo"
                  />
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
                rows="2"
                className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                type="text"
                value={edit?.title}
                onChange={(e) =>
                  setEdit({ ...edit, [e.target.name]: e.target.value })
                }
              />
              <textarea
                name="text"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                value={edit?.text}
                onChange={(e) =>
                  setEdit({ ...edit, [e.target.name]: e.target.value })
                }
              />
                {
                <div>
                  <CheckOutlined
                    onClick={() => {
                      editAbout();
                    }}
                  />
                  <CloseOutlined onClick={() => setEdit("")} />
                </div>
              }
            </div>
          )}

          {!lng && (
            <PlusOutlined
              className=" flex justify-center items-center hover:scale-150 cursor-pointer transition ease-out duration-700"
              onClick={() => setAddShow(true)}
            />
          )}

          {!lng && <Slide />}
        </div>
      ) : (
        <div className="container">
          <h1 className="text-white text-lg text-center mt-4">Add Data</h1>
          <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
            <label
              className=" w-[40%] h-60 flex justify-center"
              htmlFor="EditLogo"
            >
              {img ? (
                <img className="" src={img} alt="logo" />
              ) : (
                <div className=" w-[40%] flex mt-4 justify-center border-2 border-red-600  cursor-pointer">
                  <span className="flex items-center">upload Image</span>
                </div>
              )}
            </label>

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
              value={add?.title}
              placeholder="Title"
              onChange={(e) => {
                setAdd({ ...add, title: e.target.value });
              }}
            />
            <textarea
              name="text"
              placeholder="Text"
              className=" text-4 sm:text-[18px]  w-[60%] h-[10rem] resize-none placeholder-opacity-75 placeholder-px-4"
              value={add?.text}
              onChange={(e) => {
                setAdd({ ...add, text: e.target.value });
              }}
            />
            {
              <div className=" w-[30%] mt-4 flex justify-between text-white ">
                <CheckOutlined
                  onClick={() => {
                    addData();
                  }}
                  className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                />
                <CloseOutlined
                  onClick={() => setAddShow(false)}
                  className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                />
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import Slide from "../components/partnerSlide/Slide";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AddPrograms, EditPrograms, deletePrograms, getFetchPrograms } from "../store/action/ProgramsAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { DeleteItem } from "../store/action/HomeAction";
import { Upload } from "../components/Admin/Upload";
import useAuth from "../hooks/AdminHooks/useAuth";

const Programs = () => {
  document.title = "Programs | Armenian Nasa";
  const { Programs } = useSelector((state) => state?.Programs);
  const dispatch = useDispatch();

  const [langText, setLangText] = useState(JSON.parse(localStorage.getItem('languageData3'))||[]);
  const [loading,setLoading] = useState(false)

  const [editLang, setEditLang] = useState("");

  const [edit, setEdit] = useState("");
  const [img, setImg] = useState("");
  const [addShow, setAddShow] = useState(false);
  const [lng, setLng] = useState(localStorage.getItem("addLang"));
  const {auth}=useAuth()
const [succes,setSucces]= useState('')

  const [add, setAdd] = useState({
    text: "",
    title: "",
  });

  useEffect(() => {
    dispatch(getFetchPrograms());
  }, [dispatch]);

  useEffect(() => {
    if (img && edit) {
      setEdit({ ...edit, picture: img });
    }
  }, [img]);

  async function editPrograms() {
    await dispatch(EditPrograms(edit));

    dispatch(getFetchPrograms());
    setEdit("");
  }

  async function deleteItem(id) {
    await DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => dispatch(deletePrograms(id)),
    });
    dispatch(getFetchPrograms());
  }

  async function addData() {
    let item = localStorage.getItem("language");
    let language = JSON.parse(item)
    const obj = {
      ...add,
      picture: img,
      language,
    };
    await dispatch(AddPrograms(obj,setLoading,setSucces));
    setAddShow(false);
    setAdd({
      title: "",
      text: "",
    });
    dispatch(getFetchPrograms());
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
    setEditLang(item)
  }
  async function getItemCount() {
    let arr = [...langText];
    let language = localStorage.getItem("selectLang");
    let item = JSON.parse(language);
    for (let i = 0; i < Programs.length; i++) {
      arr.push({
        picture: Programs[i].picture,
        language: editLang,
        title: "",
        text: "",
      });
    }
    setLangText(arr);
  }
  async function addlangText(e, index) {
    if (!langText.length) {
      await getItemCount();
    }
    if (langText.length === Programs.length) {
      let newText = [...langText];
      newText[index][e.name] = e.value;
      setLangText(newText);
    }
    localStorage.setItem('languageData3',JSON.stringify(langText))

  }
  console.log(langText);

  return (
    <div
      className={
        lng
          ? "w-[70%] p-2  text-white"
          : " min-h-[80vh] flex justify-center bg-repeat-y bg-[length:100%_auto]"
      }
      style={{ backgroundImage: `url('/Images/gif3.gif')` }}
    >
      {!addShow ? (
        <div
          className={
            lng
              ? "w-[100%]  bg-[#4949598b] text-[25px]"
              : "max-w-[1600px] text-white  bg-[#4949598b] text-[25px] p-4"
          }
        >
          <h1 className=" text-[55px] text-blue-500 mt-5 felx text-center">
            AASA Programs
          </h1>
          <div className=" grid grid-cols-2  justify-center  gap-[110px] p-5">
            {!edit &&
              Programs?.map((el, index) => (
                <div
                  key={index}
                  className={`${index === 0 || index % 3 === 0 ? "col-span-2" : "sm:col-span-1 col-span-2"
                    } flex flex-col gap-5    justify-start items-center text-[25px]`}
                >
                  <img src={el.picture} alt="" className=" rounded-[12px]" />
                  <h2 className=" text-[24px]">{el.title}</h2>
                  <p className=" text-[18px]">{el.text}</p>
                  {!lng && auth?.role === "admin" && (
                    <div className=" flex gap-5 mt-5">
                      <EditOutlined onClick={() => setEdit(el)} className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" />
                      <DeleteOutlined onClick={() => deleteItem(el.id)} className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" />
                    </div>
                  )}
                  {lng && auth?.role === "admin" && (
                    <div className="container">
                      <h1 className="text-white text-lg text-center mt-4">
                        Add Traslate Data
                      </h1>
                      <div className="flex flex-col justify-center items-center w-[100%] mx-auto ">
                        <textarea
                          name="title"
                          rows="2"
                          className="block p-2.5 my-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                          type="text"
                          value={langText[index]?.title}
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
                          value={langText[index]?.text}
                          onChange={(e) => {
                            addlangText(e.target, index);
                          }}
                        />
                        {/* {
                          <div className="  mt-5 flex gap-5 text-white ">
                            <CheckOutlined
                              onClick={() => { }}
                              className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                            // className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                            />
                            <CloseOutlined
                              onClick={() => setAddShow(false)}
                              className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                            // className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                            />
                          </div>
                        } */}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          {edit && (
            <div className="flex flex-col justify-center items-center w-[100%] mx-auto ">
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
              <Upload name={'EditLogo'} setImg={setImg} />

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
                <div className=" flex gap-5 mt-5">
                  <CheckOutlined
                    className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                    onClick={() => {
                      editPrograms();
                    }}
                  />
                  <CloseOutlined onClick={() => setEdit("")} className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" />
                </div>
              }
            </div>
          )}
          {!edit && !lng && auth?.role === "admin" && (
            <div className=" flex justify-center gap-5 mt-5">
              <PlusOutlined
                className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                // className=" flex justify-center items-center hover:scale-150 cursor-pointer transition ease-out duration-700"
                onClick={() => setAddShow(true)}
              />
            </div>
          )}
          {!lng && <Slide />}
        </div>
      ) : (
        <div className="container text-[25px]">
          <h1 className="text-white text-lg text-center mt-4">Add Data</h1>
          <div className="flex flex-col justify-center items-center w-[100%] mx-auto ">
            <label
              className=" w-[40%] h-60 flex justify-center"
              htmlFor="EditLogo"
            >
              {img ? (
                <img className="" src={img} alt="logo" />
              ) : (
                <div className=" w-[40%] flex mt-4 justify-center border-2 border-blue-500  cursor-pointer">
                  <span className="flex items-center">upload Image</span>
                </div>
              )}
            </label>

            <Upload name={'EditLogo'} setImg={setImg} />

            <textarea
              name="title"
              className="block p-2.5 my-5 w-[60%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"

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
              className="block p-2.5 my-5 w-[60%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
              rows={4}
              value={add?.text}
              onChange={(e) => {
                setAdd({ ...add, text: e.target.value });
              }}
            />
            {
              <div className="  mt-5 flex gap-5 text-white ">
                <CheckOutlined
                  onClick={() => {
                    addData();
                  }}
                  className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                />
                <CloseOutlined
                  onClick={() => setAddShow(false)}
                  className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                />
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;

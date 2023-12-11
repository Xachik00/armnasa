import React, { useEffect, useState } from "react";
import Slide from "../../components/partnerSlide/Slide";
import { useDispatch, useSelector } from "react-redux";
import { AddAbout, EditAbout, deleteAbout, getFetchAbout } from "../../store/action/AboutAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { DeleteItem } from "../../store/action/HomeAction";
import { Upload } from "../../components/Admin/Upload";
import useAuth from "../../hooks/AdminHooks/useAuth";


const About = () => {

  document.title = "About | Armenian Nasa";

  const dispatch = useDispatch();
  const { auth } = useAuth()
  const { About } = useSelector((state) => state.About);
  const [edit, setEdit] = useState("");
  const [addShow, setAddShow] = useState(false);
  const [add, setAdd] = useState({});
const [succes,setSucces]= useState('')
const [loading,setLoading]= useState(false)
  
  const [langText, setLangText] = useState(JSON.parse(localStorage.getItem('languageData2'))||[]);

  const [editLang, setEditLang] = useState("");
  const [img, setImg] = useState("");

  const [lng, setLng] = useState(localStorage.getItem("addLang"));


  useEffect(() => {
    dispatch(getFetchAbout());
  }, [dispatch]);

  useEffect(() => {
    if (img && edit) {
      setEdit({ ...edit, picture: img });
    }
  }, [img]);

  async function editAbout() {
    await dispatch(EditAbout(edit));
    dispatch(getFetchAbout());
    setEdit("");
  }
  async function deleteItem(id) {
    await DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => dispatch(deleteAbout(id)),
    });
    dispatch(getFetchAbout());
  }

  async function addData() {
    let item = localStorage.getItem("language");
let language = JSON.parse(item)
    const obj = {
      ...add,
      picture: img,
      language,
    };
    await dispatch(AddAbout(obj,setLoading,setSucces));
    setAdd({
      title: "",
      text: "",
    });
    setImg("")

    await dispatch(getFetchAbout());
    setAddShow(false);
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
    for (let i = 0; i < About.length; i++) {
      arr.push({
        picture:About[i].picture,
        language: editLang ,
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
    if (langText.length === About.length) {
      let newText = [...langText ];
      newText[index][e.name] = e.value;
      setLangText(newText);
    }
    localStorage.setItem('languageData2',JSON.stringify(langText))

  }
  console.log(langText);

  return (
    <div
      className={
        lng
          ? "w-[70%] p-2  text-white"
          : " w-full min-h-[80vh]  flex flex-col justify-center items-center text-white text-[25px]"
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
            {About[0].title}
          </h1>

          <div className=" grid grid-cols-2  justify-center  gap-10 sm:gap-[110px] p-5">
            {!edit &&
              About?.map((el, index) => (
                <div
                  key={index}
                  className={`${index === 0 || index % 3 === 0
                      ? "col-span-2"
                      : "sm:col-span-1 col-span-2"
                    } flex flex-col gap-2 sm:gap-5  justify-start items-center `}
                >
                  <img src={el?.picture} alt="" className=" rounded-[12px]" />
                  <h2 className=" text-[20px] sm:text-[24px]">{el?.title}</h2>
                  <p className=" text-4 sm:text-[18px]">{el?.text}</p>
                  {!lng && auth?.role === "admin" && (
                    <div className="w-[100px] flex justify-between mt-4">
                      <EditOutlined onClick={() => setEdit(el)}
                        className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" />
                      <DeleteOutlined onClick={() => deleteItem(el.id)} className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" />
                    </div>
                  )}
                  {lng && auth?.role === "admin" && (
                    <div className="container text-[25px]">
                      <h1 className="text-white text-lg text-center mt-4">
                        Add Traslate Data
                      </h1>
                      <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
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
                          <div className=" mt-5 flex gap-5 text-white ">
                            <CheckOutlined
                              onClick={() => { }}
                              className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"

                            
                            />
                            <CloseOutlined
                              onClick={() => setAddShow(false)}
                              className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"

                            
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
                      editAbout();
                    }}
                  />
                  <CloseOutlined onClick={() => setEdit("")} className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" />
                </div>
              }
            </div>
          )}

          {!edit && !lng && auth?.role === "admin" && (
            <div className=" mt-5 flex justify-center"><PlusOutlined
              className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
              onClick={() => setAddShow(true)}
            />
            </div>
          )}

          {!lng && <Slide />}
        </div>
      ) : (
        <div className="container">
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

            <Upload name={'Add Image'} setImg={setImg} />

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
                // className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                />
                <CloseOutlined
                  onClick={() => setAddShow(false)}
                  className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                // className="hover:scale-150 cursor-pointer transition ease-out duration-700"
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


import React, { useState, useEffect } from 'react'
import LargeImg from '../components/LargeImg'
import Slide from '../components/partnerSlide/Slide'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddAmade, DeleteAmade, EditAmade, getFetchAmade } from '../store/action/AmadeAction'
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { DeleteItem } from '../store/action/HomeAction'
import { Upload } from '../components/Admin/Upload'
import useAuth from '../hooks/AdminHooks/useAuth'


const Amadee24 = () => {
  document.title = "Amadee24 | Armenian Nasa ";

  const { Amade } = useSelector((state) => state.Amade);
  const [langText, setLangText] = useState([]);
  const [editLang, setEditLang] = useState("");
  const { auth } = useAuth()
  const [img, setImg] = useState("");
  const [edit, setEdit] = useState('');
  const [addShow, setAddShow] = useState(false);
  const [lng, setLng] = useState(localStorage.getItem("addLang"));
  const [add, setAdd] = useState({
    text: "",
    title: "",
  });
  const dispatch = useDispatch();
  let imgArr = [
    "https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AMADEE-24%20Mission%20Patch.png/:/rs=w:1280,h:1388",
    "https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AMADEE-Poster.jpg/:/rs=w:1280,h:853",
    "https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/1.png/:/rs=w:1160,h:459",
  ];
  const [largeImg, setLargeImg] = useState(-1);


  useEffect(() => {
    if (img && edit) {
      setEdit({ ...edit, picture: img });

    }
  }, [img]);

  async function deleteItemS(id) {
    DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => dispatch(DeleteAmade(id)),
    });
  }

  async function editAmade() {
    // const obj = {
    //   ...edit,
    //   picture: img,
    // };
    await dispatch(EditAmade(edit));
    await dispatch(getFetchAmade());
    setEdit({
      text: "",
      title: "",
      picture: ""
    });
  }

  useEffect(() => {
    dispatch(getFetchAmade());
  }, [dispatch]);


  async function addData() {
    const obj = {
      ...add,
      picture: img,
    };
    await dispatch(AddAmade(obj));
    setAddShow(false);
    setAdd({
      title: "",
      text: "",
    });
    await dispatch(getFetchAmade());
  }

  useEffect(() => {
    handleLanguageChange();
  }, [localStorage.getItem("addLang")]);

  function handleLanguageChange() {
    let language = localStorage.getItem("addLang");
    let item = JSON.parse(language)

    setLng(item);
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
    for (let i = 0; i < Amade.length; i++) {
      arr.push({
        picture:Amade[i].picture,
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
    if (langText.length === Amade.length) {
      let newText = [...langText ];
      newText[index][e.name] = e.value;
      setLangText(newText);
    }
    localStorage.setItem('languageData',JSON.stringify([langText,"Amade"]))

  }
  console.log(langText);

  return (
    <div
      className={
        lng
          ? "w-[70%] p-2  text-white"
          : "  w-full min-h-[60vh] sm:min-h-[90vh] flex justify-center items-center"
      }
      style={{ background: `url('/Images/gif2.gif')` }}
    >
      {!addShow ? (
        <div
          className={
            lng ? "w-[100%]  bg-[#4949598b]" : "max-w-[1600px] bg-[#4949598b] p-4 "
          }
        >
          <div className=" flex gap-5 text-[25px] flex-col text-white   items-center mt-5">
            <h1 className=" text-blue-500 text-[45px]">AMADEE 24</h1>
            <div className=" grid grid-cols-2  justify-center  gap-10 sm:gap-[110px] p-5">
              {!edit&&
                Amade?.map((el, index) => (
                  <div
                    key={el?.id}
                    className={`${index === 0 || index % 3 === 0
                      ? "col-span-2"
                      : "sm:col-span-1 col-span-2"
                      } flex flex-col gap-2 sm:gap-5  justify-start items-center `}
                  >
                    <img src={el?.picture} alt="" className=" rounded-[12px]" />
                    <h2 className=" text-[20px] sm:text-[24px]">{el?.title}</h2>
                    <p className=" text-4 sm:text-[18px]">{el?.text}</p>
                    {!lng && auth?.role === "admin" && (
                      <div className="flex  mt-5 gap-5">
                        <EditOutlined className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" onClick={() => setEdit(el)} />
                        <DeleteOutlined className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" onClick={() => deleteItemS(el.id)} />
                      </div>
                    )}
                    {lng && auth?.role === "admin" && (
                      <div className="container">
                        <h1 className="text-white text-lg text-center mt-4">
                          Add Tranlate Data
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
                          {
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
                          }
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {edit && (
              <div className="flex flex-col justify-center items-center w-[100%] mx-auto ">
                {/* <img src={edit?.picture} alt="" className=" rounded-[12px]" /> */}
                {edit && (
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
                className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"

                  // className=" text-[20px] sm:text-[18px] w-[60%] m-5 resize-none"
                  type="text"
                  value={edit?.title}
                  onChange={(e) =>
                    setEdit({ ...edit, [e.target.name]: e.target.value })
                  }
                />
                <textarea
                  name="text"
                className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"

                  // className=" text-4 sm:text-[18px]  w-[60%] h-[10rem] resize-none"
                  value={edit?.text}
                  rows={4}
                  onChange={(e) =>
                    setEdit({ ...edit, [e.target.name]: e.target.value })
                  }
                />
                {
                  <div className="  mt-5 gap-5 flex  text-white " >
                    <CheckOutlined
                      onClick={() => {
                        editAmade();
                      }}
                      className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                    // className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                    />
                    <CloseOutlined onClick={() => setEdit("")}
                      className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                    // className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                    />
                  </div>
                }
              </div>
            )}
            {!edit && !lng && auth?.role === "admin" && (
              <div className=' flex justify-center mt-5 '><PlusOutlined
                className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                // className=" flex justify-center items-center hover:scale-150 cursor-pointer transition ease-out duration-700"
                onClick={() => setAddShow(true)}
              />
              </div>
            )}
          </div>

          <div className=" grid grid-cols-3 items-center gap-8 mt-5 [&>*]:cursor-pointer [&>*]:scale-[.7] [&>*:hover]:scale-[.8] [&>*]:ease [&>*]:duration-500">
            {Amade?.map((el, index) => (
              <div key={el?.id} onClick={() => setLargeImg(index)}>
                <img src={el} alt="" className=" rounded-lg " />
              </div>
            ))}
          </div>

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

              // className=" text-[20px] sm:text-[18px] w-[60%] m-5 resize-none"
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
              <div className="  mt-5 gap-5 flex text-white ">
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
      {largeImg !== -1 && (
        <LargeImg Img={largeImg} setLargeImg={setLargeImg} imgArr={imgArr} />
      )}
    </div>
  );
};

export default Amadee24;

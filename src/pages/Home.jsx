import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteItem, EditHome, deleteHome, getFetchHome } from "../store/action/HomeAction";
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { uploadImageHandleradd } from "../store/action/UploadImage";
import { Upload } from "../components/Admin/Upload";
import useAuth from "../hooks/AdminHooks/useAuth";

const Home = () => {
    
  const { Home } = useSelector((state) => state.Home);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");
  const [img, setImg] = useState('');
  const [lng, setLng] = useState(localStorage.getItem("addLang"));
  const [langText, setLangText] = useState(JSON.parse(localStorage.getItem('languageData1'))||[]);
  const [editLang, setEditLang] = useState("");
const {auth}=useAuth()
  const [add, setAdd] = useState({ 
    text: "",
    title: "",
  })
  useEffect(() => {
    if(img && edit){
    setEdit({ ...edit, picture: img });
    }
  }, [img]);

  useEffect(()=>{
    setLangText([])
  },[localStorage?.getItem("selectLang")])
  useEffect(() => {
    dispatch(getFetchHome());
  }, [dispatch]);

  async function   editHome() {
   await  dispatch(EditHome(edit))

    dispatch(getFetchHome());
    setEdit('')
  }
  async function deleteItem(id) {
  await   DeleteItem({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => dispatch(deleteHome(id)),
    });
    dispatch(getFetchHome());

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
    for (let i = 0; i < Home.length; i++) {
      arr.push({
        picture:Home[i].picture,
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
    if (langText.length === Home.length) {
      let newText = [...langText ];
      newText[index][e.name] = e.value;
      setLangText(newText);
    }
    localStorage.setItem('languageData1',JSON.stringify(langText))

  }
 

  return (
    <div
      className={
        lng
          ? "w-[70%] p-2  text-white"
          : "  w-full min-h-[90vh] sm:min-h-[100vh] flex justify-center items-center"
      }
      style={{ background: `url(${Home[0]?.picture})` }}
    >
      <div
        className={
          lng ? "w-[100%] flex justify-between" : "w-[60%] md:w-[43%] text-center"
        }
      >
        {!edit &&
          Home?.map((el, index) => {
            return (
              <div key={index + 1} className="flex flex-col items-center">
                <h1 className=" text-blue-500 text-[35px] dm:text-[55px]">
                  {Home[0]?.title}
                </h1>
                <p className=" text-[20px] sm:text-[30px]  text-white">
                  {Home[0]?.text}
                </p>
                {!lng && auth?.role==="admin"&& (
                  <div className="w-[100px] flex justify-between mt-4">
                    <EditOutlined className=" text-[25px] hover:bg-blue-500 p-2 rounded-xl text-white hover:scale-125 " onClick={() => setEdit(el)} />
                    
                    {/* <DeleteOutlined onClick={() => deleteItem(el.id)} /> */}
                  </div>
                )}
              </div>
            );
          })}
        {edit && (
          <div className="flex flex-col text-[25px] justify-center items-center w-[100%] mx-auto text-white">
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
              <div className=" mt-5 flex gap-5">
                <CheckOutlined className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125"
                  onClick={() => {
                    editHome();
                  }}
                />{" "}
                <CloseOutlined className=" rounded-xl p-2 hover:bg-blue-500 hover:scale-125" onClick={() => setEdit("")} />
              </div>
            }
          </div>
        )}
        {lng && auth?.role==="admin"&&(
          <div className="container text-[25px]">
            <h1 className="text-white text-lg text-center mt-4">
              Add Translate Data
            </h1>
            <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
              <textarea
                name="title"
                rows="2"
                className="block p-2.5 my-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                type="text"
                value={langText[0]?.title}
                placeholder="Title"
                onChange={(e) => {
                  addlangText(e.target, 0);
                }}
              />
              <textarea
                name="text"
                placeholder="Text"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                value={langText[0]?.text}
                onChange={(e) => {
                  addlangText(e.target, 0);
                }}
              />
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

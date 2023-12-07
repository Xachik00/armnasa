
import React, { useState } from "react";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Home from "./Home";
import About from "./About/About";
import Programs from "./Programs";
import Amadee24 from "./Amadee24";
import ContactUs from "./Contact/ContactUs";
import { useEffect } from "react";
import { AddLanguagePage } from "../components/AddLanguagePage/AddLanguagePage";
import BackraundChange from '../components/Admin/BackraundChange'
import HeaderChange from '../components/Admin/HeaderChange'
const Admin = () => {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    if (page === "Language") {
      localStorage.setItem("addLang", JSON.stringify(page));
    }
  }, [page]);




    return (
        
        <div className=' w-full flex justify-center' style={{ backgroundImage: `url('/Images/gif3.gif')` }}>
            <div className=' flex w-[1600px] justify-between '>
                <AdminDashboard page={page} setPage={setPage}/>
                <div className=' max-w-[1000px] min-h-[80vh] mx-auto mr-[0px] '>
                    {page==="Home"&&<Home/>}
                    {page==="About"&&<About/>}
                    {page==="Programs"&&<Programs/>}
                    {page==="Amadee-24"&&<Amadee24/>}
                    {page==="Contact"&&<ContactUs/>}
                    {page==="Header"&&<HeaderChange/>}
                    {page==="Footer"&&<div>Footer</div>}
                    {page==="Backraund"&&<BackraundChange />}
                    {page==="Language"&& <AddLanguagePage/> }
                </div>
            </div>

        </div>
   
  );
};

export default Admin;

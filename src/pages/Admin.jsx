
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
  document.title = "Admin | Armenian Nasa ";

  const [page, setPage] = useState(JSON?.parse(localStorage?.getItem("page"))||"Home");
  useEffect(() => {
    if (page === "Language") {
      localStorage.setItem("addLang", JSON.stringify(page));

    } else {
      
      localStorage.removeItem('addLang')
    }
    localStorage?.setItem("page",JSON?.stringify(page))
  }, [page]);



  return (

    <div className=' w-full flex justify-center min-h-[100vh]' style={{ backgroundImage: `url('/Images/gif3.gif')` }}>
      <div className=' flex w-full justify-between  '>
        {/* <div className=" w-[300px] bg-red-400"> */}
        <AdminDashboard page={page} setPage={setPage} />

        {/* </div> */}
        <div className=' w-[100%]  mx-auto  bg-white min-h-[100vh]'>
          <div>
            <h2 className=" flex justify-center text-[40px] text-[blue]">{page}</h2>
          </div>
          <div>
            {page === "Home" && <Home />}
            {page === "About" && <About />}
            {page === "Programs" && <Programs />}
            {page === "Amadee-24" && <Amadee24 />}
            {page === "Contact" && <ContactUs />}

            {page === "Header" && <HeaderChange />}
            {page === "Backraund" && <BackraundChange />}
            {page === "Language" && <AddLanguagePage setPage={setPage}/>}
          </div>
        </div>
      </div>

    </div>

  );
};

export default Admin;

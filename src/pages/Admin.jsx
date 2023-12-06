import React, { useState } from "react";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Home from "./Home";
import About from "./About/About";
import Programs from "./Programs";
import Amadee24 from "./Amadee24";
import ContactUs from "./Contact/ContactUs";
import { useEffect } from "react";
import { AddLanguagePage } from "../components/AddLanguagePage/AddLanguagePage";

const Admin = () => {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    if (page === "Language") {
      localStorage.setItem("addLang", JSON.stringify(page));
    }
  }, [page]);
  return (
    <div
      className=" w-full flex justify-center"
      style={{ background: `url('/Images/gif3.gif')` }}
    >
      <div className=" flex max-w-[1600px]  ">
        <AdminDashboard setPage={setPage} />
        <div className=" max-w-[1300px] mx-auto flex justify-center">
          {page === "Home" && <Home />}
          {page === "About" && <About />}
          {page === "Programs" && <Programs />}
          {page === "Amadee-24" && <Amadee24 />}
          {page === "Contact" && <ContactUs />}
          {page === "Language" && <AddLanguagePage />}
        </div>
      </div>
    </div>
  );
};

export default Admin;

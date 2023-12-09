import { MenuOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { useNavigate } from 'react-router-dom';
import { getCountryCode } from 'countries-list';
import { useSelector } from 'react-redux';
import { getFetchLanguage } from '../../store/action/LanguageAction';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/AdminHooks/useAuth';
import { getFetchHeader } from '../../store/action/HeaderAction';
const Header = () => {
  const [languages, setLanguages] = useState("US"); // Use useState hook
  const [scrollHeader, setScrollHeader] = useState(false)
 
  let bb = window.location.pathname;
  window.onscroll = function () { myFunction() };
  const navigate = useNavigate();
  const { Language } = useSelector((state) => state.Language);
  const { Header } = useSelector((state) => state.Header);

  const dispatch = useDispatch();
  const { auth } = useAuth()
  useEffect(() => {
    dispatch(getFetchLanguage());
    dispatch(getFetchHeader())
  }, [dispatch]);
  
  console.log(Header);
console.log(Language);

  function myFunction() {
    if (window.pageYOffset > 0) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }

  useEffect(() => {
    handleLanguageChange();
  }, [languages, bb]);

  function handleLanguageChange() {
    let language = localStorage.getItem("language");
    if (language === null) {
      localStorage.setItem("language", JSON.stringify(languages || "am"));
      setLanguages(languages);
      window.location.hash = languages;
    } else {
      setLanguages(JSON.parse(language));
      window.location.hash = JSON.parse(language);
    }
  }

  function changeLanguage(e) {
    localStorage.setItem("language", JSON.stringify(e));
    setLanguages(e);
    navigate("/");
    window.location.reload();

  }


  

  return (
    <div className={` ${scrollHeader ? "fixed z-50 sm:h-[80px]" : ""} w-full p-3 sm:p-0  bg-black sm:h-[120px] flex justify-center items-center border-b-[.5px] border-blue-500`}>
      <div className=' w-full sm:w-[1600px] bg-black sm:h-[50px] flex text-white justify-between items-center'>
        <div>
          <a href='/'><img src="./Images/logo.webp" alt="" className={`${scrollHeader ? "w-[70px] sm:w-[110px]" : " w-[70px] sm:w-[160px]"}`} /></a>
        </div>
        <div className="flex gap-5">

          <div className=' text-[15px] sm:text-[18px] hidden sm:flex gap-6  [&>*:hover]:border-t-[1px]   [&>*]:border-b-[1px] [&>*]:ease-in [&>*]:duration-200 [&>*]:p-2  [&>*]:rounded-[12px]   '>
            <a href="/" className={`${window?.location?.pathname === '/' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>{Header[0]?.title}</a>
            <a href="/about" className={`${window?.location?.pathname === '/about' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>{Header[1]?.title}</a>
            <a href="/programs" className={`${window?.location?.pathname === '/programs' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>{Header[2]?.title}</a>
            <a href="/amadee" className={`${window?.location?.pathname === '/amadee' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>{Header[3]?.title}</a>
            <a href="/contact" className={`${window?.location?.pathname === '/contact' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>{Header[4]?.title}</a>
          </div>
<div className='text-red-500'>
          <ReactFlagsSelect  countries={Language.map((el)=>el.text)}
            customLabels={''} selected={languages} onSelect={(countryCode) => changeLanguage(countryCode)}

          /> 
          </div>
        </div>
        <div className=' sm:hidden'>
          <MenuOutlined className=' text-white text-[30px]' />
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false)
  window.onscroll = function () { myFunction() };
  useEffect(()=>{
    console.log();
  },[])
  function myFunction() {
    if (window.pageYOffset > 0) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }
  return (
    <div className={` ${scrollHeader?"fixed z-50 h-[80px]":""} w-full  bg-black h-[120px] flex justify-center items-center border-b-[.5px] border-blue-500`}>
      <div className=' w-[1600px] bg-black h-[50px] flex text-white justify-between items-center'>
        <div>
          <a href='/'><img src="./Images/logo.webp" alt="" className={`${scrollHeader?"w-[80px]":" w-[120px]"}`} /></a>
        </div>
        <div className=' text-[18px] flex gap-6  [&>*:hover]:border-t-[1px]   [&>*]:border-b-[1px] [&>*]:ease-in [&>*]:duration-200 [&>*]:p-2  [&>*]:rounded-[12px]   '>
          <a href="/" className={`${window?.location?.pathname==='/'?"border-green-500 hover:text-green-500":"border-blue-500 hover:text-blue-500" }`}>ARMENIAN AEROSPACE AGENCY</a>
          <a href="/about" className={`${window?.location?.pathname==='/about'?"border-green-500 hover:text-green-500":"border-blue-500 hover:text-blue-500" }`}>ABOUT</a>
          <a href="/programs" className={`${window?.location?.pathname==='/programs'?"border-green-500 hover:text-green-500":"border-blue-500 hover:text-blue-500" }`}>PROGRAMS</a>
          <a href="/amadee" className={`${window?.location?.pathname==='/amadee'?"border-green-500 hover:text-green-500":"border-blue-500 hover:text-blue-500" }`}>AMADEE-24</a>
          <a href="/contact" className={`${window?.location?.pathname==='/contact'?"border-green-500 hover:text-green-500":"border-blue-500 hover:text-blue-500" }`}>CONTACT</a>

        </div>
      </div>
    </div>
  )
}

export default Header
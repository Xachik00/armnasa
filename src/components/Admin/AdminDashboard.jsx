import { CalendarOutlined, BgColorsOutlined, BorderBottomOutlined, BorderTopOutlined, CloseOutlined, ContactsOutlined, DownOutlined, GlobalOutlined, HomeOutlined, LaptopOutlined, LockOutlined, MenuOutlined, RocketOutlined, SettingOutlined, SnippetsOutlined, TeamOutlined, UpOutlined } from '@ant-design/icons';

import React, { useState } from 'react'
import { useEffect } from 'react';


const AdminDashboard = ({page,setPage}) => {

const [active, setActive] = useState('')
const [menuActive, setMenuActive] = useState(true)
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    
    };

  
    window.addEventListener('resize', handleResize);

    if(window.innerWidth < '768'){
      setMenuActive(false)
    }else{
      setMenuActive(true)
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
 


  return (
    <div className=' absolute'>
    <div className={(menuActive || (windowWidth > '768' && menuActive)) ? 'relative z-1 max-w-[300px] bg-[#4949598b]  h-[90vh]':'hidden'}>
      <div className=' w-full bg-[#00000049] flex items-center justify-around p-2 text-[20px] text-blue-500'>
        <img src="./Images/logo.webp" alt="" className=' w-20' />
        <CloseOutlined onClick={()=>{setMenuActive(false)}}/>
      </div>
      <div className=' text-white text-[22px]'>
        <ul>
          <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Pages' ? setActive('') : setActive('Pages') }}>
            <p className={` flex gap-2 items-center ${active === 'Pages' ? " text-green-500" : ""}`}><SnippetsOutlined />Pages</p>
            {active === 'Pages' ? < UpOutlined /> : < DownOutlined />}
          </li>
          <ul className={`${active === 'Pages' ? " block" : "hidden"} pl-10 [&>li]:p-1 [&>li]:border-b-2  [&>li]:cursor-pointer`} onClick={(e) => setPage(e.target.innerText)}>
            <li className={`${page === 'Home' ? "border-green-500 text-green-500" : " border-blue-500"}`} >Home</li>
            <li className={`${page === 'About' ? "border-green-500 text-green-500" : " border-blue-500"}`}>About</li>
            <li className={`${page === 'Programs' ? "border-green-500 text-green-500" : " border-blue-500"}`}>Programs</li>
            <li className={`${page === 'Amadee-24' ? "border-green-500 text-green-500" : " border-blue-500"}`}>Amadee-24</li>
            <li className={`${page === 'Contact' ? "border-green-500 text-green-500" : " border-blue-500"}`}>Contact</li>
          </ul>
        </ul>
        {/* <ul> */}
          {/* <li className=' flex justify-between items-center cursor-pointer p-2 bg-gray-800 border-b-2 border-blue-500' onClick={() => { active === 'Setings' ? setActive('') : setActive('Setings') }}>
            <p className={` flex gap-2 items-center ${active === 'Setings' ? " text-green-500" : ""}`}><SettingOutlined />Setings</p>
            {active === 'Setings' ? < UpOutlined /> : <DownOutlined />}
          </li> */}
          {/* <ul className={`${active === 'Setings' ? " block" : "hidden"} pl-10 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`}> */}
            <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Setings' ? setActive('') : setActive('Setings') }}>
              <p className={` flex gap-2 items-center ${active === 'Setings' ? " text-green-500" : ""}`}><SettingOutlined />Setings</p>
              {active === 'Setings' ? < UpOutlined /> : <DownOutlined />}
            </li>
            <ul className={`${active === 'Setings' ? " block" : "hidden"} pl-10 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`} onClick={(e) => setPage(e.target.innerText)}>
              <li className='flex items-center'><LockOutlined />Login,Password</li>
              <li className='flex items-center'><GlobalOutlined/>Language</li>
            </ul>
          {/* </ul> */}
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Header' ? setActive('') : setActive('Header'); setPage('Header') }}>
              <p className={` flex gap-2 items-center ${active === 'Header' ? " text-green-500" : ""}`}><BorderTopOutlined />Header</p>
            </li>

          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Footer' ? setActive('') : setActive('Footer'); setPage('Footer') }}>
              <p className={` flex gap-2 items-center ${active === 'Footer' ? " text-green-500" : ""}`}><BorderBottomOutlined />Footer</p>
            </li>

          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2  bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Backraund' ? setActive('') : setActive('Backraund'); setPage('Backraund') }}>
              <p className={` flex gap-2 items-center ${active === 'Backraund' ? " text-green-500" : ""}`}><BgColorsOutlined />Backraund Image</p>
            </li>

          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2  text-black' onClick={() => { }}>
              <p className={` flex gap-2 items-center `}><img src='./Images/logoout.png' className=' w-8 ' />Exit</p>
            </li>
          </ul>
      </div>
    </div>
    <div className={(menuActive && !(windowWidth < '768')) ?" hidden ":' relative z-1 block max-w-[50px] bg-[#4949598b] h-[90vh]'}>
    <MenuOutlined  onClick={()=>{setMenuActive(true)}}  className=' text-white text-[30px] pl-2' />
    <ul>
          <li  className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => {active==='Pages'?setActive(''):setActive('Pages')}}>
            <p className={` flex gap-2 items-center ${active==='Pages'?" text-green-500":""}`}><SnippetsOutlined /></p>
            {active==='Pages'?< UpOutlined />:< DownOutlined />}
            </li>
          <ul className={`${active === 'Pages' ? " block" : "hidden"} pl-2 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`} >
            <li><HomeOutlined onClick={(e)=>{setPage("Home")}} /></li>
            <li><TeamOutlined onClick={(e)=>{setPage("About")}}/></li>
            <li><LaptopOutlined  onClick={(e)=>{setPage("Programs")}}/></li>
            <li><RocketOutlined  onClick={(e)=>{setPage("Amadee-24")}}/></li>
            <li><ContactsOutlined  onClick={(e)=>{setPage("Contact")}}/></li>
          </ul>
        </ul>
        <ul>
          <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b]border-b-2 border-blue-500' onClick={() => {active==='Setings'?setActive(''):setActive('Setings')}}>
            <p className={` flex gap-2 items-center ${active==='Setings'?" text-green-500":""}`}><SettingOutlined /></p>
            {active==='Setings'?< UpOutlined  />:<DownOutlined />}
            </li>
        </ul>
          <ul className={`${active === 'Setings' ? " block" : "hidden"} pl-2 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`}  onClick={(e)=>setPage(e.target.innerText)}>
            <li><LockOutlined onClick={(e)=>{setPage("Login,Password")}}/></li>
            <li><GlobalOutlined onClick={(e)=>{setPage("Language")}}/></li>
          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Header' ? setActive('') : setActive('Header'); setPage('Header') }}>
              <p className={` flex gap-2 items-center ${active === 'Header' ? " text-green-500" : ""}`}><BorderTopOutlined /></p>
            </li>

          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Footer' ? setActive('') : setActive('Footer'); setPage('Footer') }}>
              <p className={` flex gap-2 items-center ${active === 'Footer' ? " text-green-500" : ""}`}><BorderBottomOutlined /></p>
            </li>

          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2 bg-[#3b3b438b] border-b-2 border-blue-500' onClick={() => { active === 'Backraund' ? setActive('') : setActive('Backraund'); setPage('Backraund') }}>
              <p className={` flex gap-2 items-center ${active === 'Backraund' ? " text-green-500" : ""}`}><BgColorsOutlined /></p>
            </li>

          </ul>
          <ul>
            <li className=' flex justify-between items-center cursor-pointer p-2  text-black' onClick={() => { }}>
              <p className={` flex gap-2 items-center `}><img src='./Images/logoout.png' className=' w-8 ' /></p>
            </li>
          </ul>
    </div>
    </div>
  )
}

export default AdminDashboard
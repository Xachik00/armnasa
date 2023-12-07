import { CalendarOutlined, CloseOutlined, ContactsOutlined, DownOutlined, GlobalOutlined, HomeOutlined, LaptopOutlined, LockOutlined, MenuOutlined, RocketOutlined, SettingOutlined, SnippetsOutlined, TeamOutlined, UpOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useEffect } from 'react';

const AdminDashboard = ({setPage}) => {

const [active, setActive] = useState('')
const [menuActive, setMenuActive] = useState(true)
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    
    };

  
    window.addEventListener('resize', handleResize);

    if(window.innerWidth < '640'){
      setMenuActive(false)
    }else{
      setMenuActive(true)
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
 
console.log(menuActive );
  return (
    <div>
    <div className={(menuActive || (windowWidth > '640' && menuActive)) ? ' absolute sm:relative max-w-[300px] bg-gray-700 h-[90vh]':'hidden'}>
      <div className=' w-full bg-black flex items-center justify-around p-2 text-[20px] text-blue-500'>
        <h2 className='md:18px'>Armenian AeroSpace Agency</h2>
        <img src="./Images/logo.webp" alt="" className=' w-20' />
        <CloseOutlined onClick={()=>{setMenuActive(false)}}/>
      </div>
      <div className=' text-white text-[22px]'>
        <ul>
          <li  className=' flex justify-between items-center cursor-pointer p-2 bg-gray-800 border-b-2 border-blue-500' onClick={() => {active==='Pages'?setActive(''):setActive('Pages')}}>
            <p className={` flex gap-2 items-center ${active==='Pages'?" text-green-500":""}`}><SnippetsOutlined />Pages</p>
            {active==='Pages'?< UpOutlined />:< DownOutlined />}
            </li>
          <ul className={`${active === 'Pages' ? " block" : "hidden"} pl-10 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`} onClick={(e)=>setPage(e.target.innerText)}>
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Amadee-24</li>
            <li>Contact</li>
          </ul>
        </ul>
        <ul>
          <li className=' flex justify-between items-center cursor-pointer p-2 bg-gray-800 border-b-2 border-blue-500' onClick={() => {active==='Setings'?setActive(''):setActive('Setings')}}>
            <p className={` flex gap-2 items-center ${active==='Setings'?" text-green-500":""}`}><SettingOutlined />Setings</p>
            {active==='Setings'?< UpOutlined  />:<DownOutlined />}
            </li>
          <ul className={`${active === 'Setings' ? " block" : "hidden"} pl-10 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`}  onClick={(e)=>setPage(e.target.innerText)}>
            <li>Login,Password</li>
            <li>Language</li>
          </ul>
        </ul>
        <ul>
        <li  className=' flex justify-between items-center cursor-pointer p-2 bg-gray-800 border-b-2 border-blue-500' onClick={() => {active==='Pages'?setActive(''):setActive('Pages')}}>
            <p className={` flex gap-2 items-center ${active==='Pages'?" text-green-500":""}`}><img src='./Images/logout.png' />Log out</p>
            </li>
        </ul>
      </div>
    </div>
    <div className={(menuActive && !(windowWidth < '640')) ?" hidden ":'block max-w-[50px] bg-gray-700 h-[90vh]'}>
    <MenuOutlined  onClick={()=>{setMenuActive(true)}}  className=' text-white text-[30px] pl-2' />
    <ul>
          <li  className=' flex justify-between items-center cursor-pointer p-2 bg-gray-800 border-b-2 border-blue-500' onClick={() => {active==='Pages'?setActive(''):setActive('Pages')}}>
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
          <li className=' flex justify-between items-center cursor-pointer p-2 bg-gray-800 border-b-2 border-blue-500' onClick={() => {active==='Setings'?setActive(''):setActive('Setings')}}>
            <p className={` flex gap-2 items-center ${active==='Setings'?" text-green-500":""}`}><SettingOutlined /></p>
            {active==='Setings'?< UpOutlined  />:<DownOutlined />}
            </li>
          <ul className={`${active === 'Setings' ? " block" : "hidden"} pl-2 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`}  onClick={(e)=>setPage(e.target.innerText)}>
            <li><LockOutlined onClick={(e)=>{setPage("Login,Password")}}/></li>
            <li><GlobalOutlined onClick={(e)=>{setPage("Language")}}/></li>
          </ul>
        </ul>
    </div>
    </div>
  )
}

export default AdminDashboard
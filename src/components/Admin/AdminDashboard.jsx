import { DownOutlined, SettingOutlined, SnippetsOutlined, UpOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

const AdminDashboard = ({setPage}) => {
  const [active, setActive] = useState('')
  console.log(active);
  return (
    <div className=' w-[300px] bg-gray-700 h-[90vh]'>
      <div className=' w-full bg-black flex items-center justify-around p-2 text-[20px] text-blue-500'>
        <h2>Armenian AeroSpace Agency</h2>
        <img src="./Images/logo.webp" alt="" className=' w-20' />
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
          <ul className={`${active === 'Setings' ? " block" : "hidden"} pl-10 [&>li]:p-1 [&>li]:border-b-2 [&>li]:border-blue-500 [&>li]:cursor-pointer`}>
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
  )
}

export default AdminDashboard
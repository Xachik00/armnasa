import React from 'react'

const Footer = () => {
  return (
    <div className=' h-[200px] bg-black flex justify-center items-center text-white border-t-[.5px] border-blue-500 '>
      <div className=' w-[1600px] '>
        <div className=' flex justify-between p-5'>
          <a href="/"><img src="./Images/logo.webp" alt="" className=' w-[100px]' /></a>
        
        <div className=' w-[70%] grid grid-rows-2 grid-cols-3 gap-4  text-gray-500 [&>*:hover]:text-white'>
          <a href="/" className=''>ARMENIAN AEROSPACE AGENCY</a>
          <a href="/about" className=''>ABOUT</a>
          <a href="/programs" className=''>PROGRAMS</a>
          <a href="/amadee" className=''>AMADEE-24</a>
          <a href="/contact" className=''>CONTACT</a>

        </div>
        </div>
        <hr className=' h-[0.5px]  bg-blue-500 rounded-sm ' />
        <div className='flex justify-between p-2'>
          <p>Copyright © 2023 Armenian AeroSpace Agency - All Rights Reserved.</p>
          <p>Engined by AASA</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
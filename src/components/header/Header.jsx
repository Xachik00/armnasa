import React from 'react'

const Header = () => {

  return (
    <div className='  bg-black h-[120px] flex justify-center items-center'>
      <div className=' w-[1600px] bg-black h-[50px] flex text-white justify-between items-center'>
        <div>
          <a href='/'><img src="./Images/logo.webp" alt="" className=' w-[120px]' /></a>
        </div>
        <div className=' text-[18px] flex gap-6 [&>*:hover]:text-blue-500 [&>*:hover]:border-t-[1px] [&>*:hover]:border-b-[0px]  [&>*]:border-b-[1px] [&>*]:p-2 [&>*]:border-blue-500 [&>*]:rounded-[12px]   '>
          <a href="/" className=''>ARMENIAN AEROSPACE AGENCY</a>
          <a href="/about" className=''>ABOUT</a>
          <a href="/programs" className=''>PROGRAMS</a>
          <a href="/amadee" className=''>AMADEE-24</a>
          <a href="/contact" className=''>CONTACT</a>

        </div>
      </div>
    </div>
  )
}

export default Header
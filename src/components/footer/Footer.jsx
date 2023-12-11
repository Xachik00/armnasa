import React, { useEffect } from 'react'
import { getFetchHeader } from '../../store/action/HeaderAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { Header } = useSelector((state) => state.Header);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchHeader())
  }, [dispatch]);
  return (
    <div className='  bg-black flex flex-wrap justify-center items-center text-white border-t-[.5px] border-blue-500 '>
      <div className=' w-[1600px] '>
        <div className=' flex flex-wrap justify-between p-5'>
          <a href="/"><img src="./Images/logo.webp" alt="" className=' w-[100px]' /></a>
        
        <div className='w-[100%] grid-cols-0 sm:w-[70%] grid grid-rows-2 grid-cols-3 gap-4   text-gray-500 [&>*:hover]:text-white'>
          <a href="/" className=''>{Header[0]?.title}</a>
          <a href="/about" className=''>{Header[1]?.title}</a>
          <a href="/programs" className=''>{Header[2]?.title}</a>
          <a href="/amadee" className=''>{Header[3]?.title}</a>
          <a href="/contact" className=''>{Header[4]?.title}</a>

        </div>
        </div>
        <hr className=' h-[0.5px]  bg-blue-500 rounded-sm ' />
        <div className='text-[12px]  sm:text-[15px] flex justify-between flex-wrap p-2'>
          <p>Copyright © 2023 Armenian AeroSpace Agency - All Rights Reserved.</p>
          <p>Engined by AASA</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
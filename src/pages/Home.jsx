import React, { useEffect } from 'react'

const Home = () => {
    
    return (
        <div className="  w-full min-h-[60vh] sm:min-h-[80vh] flex justify-center items-center" style={{ background: `url('/Images/gif1.gif')` }}>
            <div className=' sm:w-[43%] text-center'>
                <h1 className=' text-blue-500 text-[35px] sm:text-[55px]'>Armenian AeroSpace Agency</h1>
                <p className=' text-[20px] sm:text-[30px]  text-white'>AASA will lead Armenia to an absolute advantage in the aerospace domain and to become an aerospace superpower.</p>
            </div>
        </div>
    )
}

export default Home
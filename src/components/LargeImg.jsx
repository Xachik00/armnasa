import React from 'react'

const LargeImg = ({ Img, setLargeImg, imgArr }) => {
    console.log(imgArr, Img);
    return (
        <div className=' fixed w-full h-[100vh] top-0 left-0  bg-[#000000c8] flex justify-center items-center'>
            <div>
                <img src={imgArr[Img].picture} alt="" className=' min-w-[1800px] blur-lg ' />
            </div>
            <div className=' text-white absolute flex flex-col items-center   w-full h-[100vh] bg-[#000000b7]'>
                <div className=' flex justify-between w-[1600px] text-[35px] mt-[40px]'>
                    <p>{Img + 1}/{imgArr.length}</p>
                    <button onClick={() => setLargeImg(-1)}>x</button>
                </div>
                <div className=' w-[1600px] h-[80vh] flex items-center justify-between mt-[20px] text-[45px]'>

                    <button onClick={() => { Img === 0 ? setLargeImg(imgArr.length - 1) : setLargeImg(Img - 1) }}>{'<'} </button>
                    <img src={imgArr[Img].picture} alt="" className=' max-w-[100%] max-h-[100%] ' />
                    <button onClick={() => { Img === imgArr?.length - 1 ? setLargeImg(0) : setLargeImg(Img + 1) }}>{'>'}</button>

                </div>
            </div>
        </div>
    )
}

export default LargeImg
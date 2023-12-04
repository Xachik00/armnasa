import React, { useState } from 'react'
import LargeImg from '../components/LargeImg'
import Slide from '../components/partnerSlide/Slide'

const Amadee24 = () => {
    document.title='Amadee24 | Armenian Nasa '

    let x = '<b >AMADEE-24</b> is a Mars analog simulation in <b>Armenia</b>, managed by the <b>Austrian Space Forum</b> hosted by the <b>Armenia AeroSpace Agency</b> . The expedition will be carried out in a Martian terrestrial analogand directed by a dedicated Mission Support Center in Austria. A  small field crew of highly trained analog astronauts with spacesuit simulators will conduct experiments preparing for future human and robotic Mars exploration missions.'
    let imgArr = [
        'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AMADEE-24%20Mission%20Patch.png/:/rs=w:1280,h:1388',
        'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AMADEE-Poster.jpg/:/rs=w:1280,h:853',
        'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/1.png/:/rs=w:1160,h:459'
    ]
    const [largeImg, setLargeImg] = useState(-1)
    return (
        <div className=' w-full min-h-[80vh] flex justify-center' style={{ background: `url('/Images/gif2.gif')` }}>
            <div className='w-[1600px] bg-[#4949598b] p-4 '>
                <div className=' flex gap-5 flex-col text-white   items-center mt-5'>
                    <h1 className=' text-blue-500 text-[45px]'>AMADEE 24</h1>
                    <a href='https://www.youtube.com/watch?v=UgEjsWLMynM&feature=youtu.be' target='blank'>
                        <img src="./Images/amadee.webp" alt="" className=' rounded-[12px]' />
                    </a>
                    <h2 className='  text-[32px]'>What is AMADEE 24 mission ?</h2>
                    <div className=' w-[75%] text-[20px]' dangerouslySetInnerHTML={{ __html: x }} />
                </div>



                <div className=' grid grid-cols-3 items-center gap-8 mt-5 [&>*]:cursor-pointer [&>*]:scale-[.7] [&>*:hover]:scale-[.8] [&>*]:ease [&>*]:duration-500'>
                    {
                        imgArr?.map((el, index) => <div key={el} onClick={() => setLargeImg(index)}><img src={el} alt='' className=' rounded-lg ' /></div>)
                    }
                </div>
                <div></div>
            <Slide/>
            </div>
            {
                largeImg !== -1 && <LargeImg Img={largeImg} setLargeImg={setLargeImg} imgArr={imgArr} />
            }
        </div>
    )
}

export default Amadee24
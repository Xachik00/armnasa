import React, { useEffect, useState } from 'react'
import Slide from '../components/partnerSlide/Slide'

const Programs = () => {
    document.title='Armenian Nasa | Programs'
    const progresArray = [
        {
            id: 1,
            picture: 'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AASA%20eVTOL-07.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true',
            title: 'AeroSpace Education, Science, Engineering, Industry',
            text: 'Depending on the time-based functionality, programs are formulated in three stages: short-term, medium-term, long-term.  The current situation, circumstances, resources and day to day challenges, were taken in consideration for the programs and stages.'
        },
        {
            id: 2,
            picture: 'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AASA%20Lab-02.jpg/:/cr=t:19.85%25,l:0%25,w:100%25,h:60.29%25/rs=w:600,h:300,cg:true',
            title: 'Short-term program ',
            text: 'Expected results for the Short-term program are: • Established AASA, which is the structure developing and coordinating the sector, • "From Idea to Product" system of aerospace laboratories, where all required research, design, experimental, sampling, prototyping and production planning works from idea to product will be performed according to the internationally accepted system, • Aerospace Scientific and Technical Council, where scientific and technical tasks are formed and formulated,  • Aerospace scientific and educational center, where short-term, non-formal education will be carried out for those who want to work in the field and beginners, as well as educational programs for universities will be developed for the training of engineers and researchers in the aerospace field, • High-precision and high-productivity aerospace engineering, which will carry out serial production of all types of aerospace products and components, • High precision and high productivity aerospace multi-axis metalworking and material printing manufacturing that will fulfill the high demand for component products in all types of aerospace projects,   • A laboratory-workshop for the design, prototyping and small-scale production of semiconductor devices and microelectronic devices for aerospace systems,  • Aerospace community, composed of Armenian individuals and Armenian organizations working in the field, who will have the opportunity to work efficiently and safely through a cooperative agreement,  • An Independent Expert Council, made up of professionals working in the field, who provide an unbiased report on every aerospace idea or project undertaken,  • International recognition of the AASA and cooperation agreements with NASA, RosCosmos, ESA, CNES, JAXA and others,  • The aerospace ambitions of RA have been formulated and announced.'
        },
        {
            id: 3,
            picture: 'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AASA%20Lab-05.jpg/:/cr=t:21.64%25,l:0%25,w:100%25,h:56.71%25/rs=w:600,h:300,cg:true',
            title: 'Medium-term program',
            text: 'Expected results for the Medium-term program are: • Production sample development and testing of electric driven permanent/continuously accelerating aerospace engines, which will be the technological axis of AASA perspective.• Production sample development and testing of aerospace eVTOL systems dedicated for individual intercontinental and interplanetary flights,• Production sample development and testing of AeroSpace Security Systems,• Semiconductor and microelectronic devices production laboratory for aerospace systems,• The aerospace ambition of Armenia is to achieve an absolute control in the aerospace domain.'
        },
        {
            id: 4,
            picture: 'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AASA%20eVTOL-04.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1240,cg:true',
            title: 'Long-term program ',
            text: 'Expected results for the Long-term program are: • Mass production of  electric driven permanent/continuously accelerating aerospace engines, • Mass production of aerospace electric Vertical Take-Off and Landing (aerospace eVTOL) systems, • Mass Production of  AeroSpace Security Systems, • Armenia is an aerospace superpower.'
        }
    ]
    const [indexArray, setIndexArray] = useState([0])
    useEffect(() => {
        if (indexArray.length === 1) {
            progresArray?.map((el, index) => {
                if (indexArray[indexArray.length - 1] + 3 === index) {
                    setIndexArray([...indexArray, index])
                };
            })
        }
    }, [progresArray])
    return (
        <div className=' min-h-[80vh] flex justify-center bg-repeat-y bg-[length:100%_auto]' style={{ backgroundImage: `url('/Images/gif3.gif')` }}>
            <div className=' w-[1600px] text-white  bg-[#4949598b]'>
                <h1 className=' text-[55px] text-blue-500 mt-5 felx text-center'>AASA Programs</h1>
                <div className=' grid grid-cols-2  justify-center  gap-[110px] p-5'>
                    {
                        indexArray.length>1&&progresArray?.map((el, index) =>  <div key={index} className={`${indexArray.includes(index) ? "col-span-2" : "col-span-1"} flex flex-col gap-5  justify-start  `}>
                                <img src={el.picture} alt="" className=' rounded-[12px]'  />
                                <h2 className=' text-[24px]'>{el.title}</h2>
                                <p className=' text-[18px]'>{el.text}</p>
                            </div>
                        )
                    }
                </div>
                <Slide/>
            </div>
        </div>
    )
}

export default Programs
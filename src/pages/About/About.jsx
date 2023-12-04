import React, { useEffect, useState } from "react";
import Slide from "../../components/partnerSlide/Slide";
const About = () => {
  const arr = [
    {
      picture: "./Images/logo.webp",
      title: "Armenian AeroSpace Agency (AASA) is a CJSC, which is the main connecting link of the state's AeroSpace scientific, engineering, technological, educational, manufacturing ambitions/requirements in the Armenian environment of state and between private companies, research/educational institutions, educational complexes and academic institutions and individuals working/creating in the field. AASA performs the coordination, concentration, efficient use, as well as commercialization of the Armenian scientific potential.",
      text: "",
    },
    {
      title: "AASA: Building blocks for the aerospace industry",
      text: "Four inhouse industrial production factories dedicated for * high precision digital CNC machining and additive manufacturing * Composite material forming and serial production * Production and Lab for semiconductor and microelectronics devices * Opto-electronic PCB/device serial production  ",
      picture: "./Images/one.webp",
    },
    {
      title: "Our future is the world's future",
      text: "For space industry we are offering new generation of aerospace engines and aerospace eVTOL capsules for intercity, intercontinental, interplanetary individual flights. This is the future of mankind... to become from Earthy to Space species. ",
      picture: "./Images/tow.webp",
    },
    {
      title: "Infrastuctures",
      text: "Labs, testing facilities, structure designs, calculations and even equipment should be designed and built for the 21st century concepts, not based on what we know. Dream of future technologies...    ",
      picture: "./Images/three.webp",
    },
  ];
  const [indexArray, setIndexArray] = useState([0])
  useEffect(() => {
    if (indexArray.length === 1) {
        arr?.map((el, index) => {
            if (indexArray[indexArray.length - 1] + 3 === index) {
                setIndexArray([...indexArray, index])
            };
        })
    }
}, [arr])


 
  return (
    <div
      className=" w-full min-h-[80vh] bg-re  py-9 flex flex-col justify-center items-center text-white "
      style={{ backgroundImage: `url('/Images/gif1.gif')` }}
    >
      <div className="max-w-[1600px] bg-[#4949598b] p-4 mx-auto">
          <h1 className=' text-[55px] text-blue-500 mt-5 felx text-center'>About AASA </h1>

          <div className=' grid grid-cols-2  justify-center  gap-[110px] p-5'>
                    {
                        indexArray.length>1&&arr?.map((el, index) =>  <div key={index} className={`${indexArray.includes(index) ? "col-span-2" : "col-span-1"} flex flex-col gap-5  justify-start  `}>
                                <img src={el?.picture} alt="" className=' rounded-[12px]'  />
                                <h2 className=' text-[24px]'>{el?.title}</h2>
                                <p className=' text-[18px]'>{el?.text}</p>
                            </div>
                        )
                    }
                </div>
<Slide/>
      </div>
    


</div>

  );
};

export default About;
import React, { useEffect, useState } from "react";
import Slide from "../../components/partnerSlide/Slide";
const About = () => {
  const arr = [
    {
      picture: "./Images/logo.webp",
      text: "Armenian AeroSpace Agency (AASA) is a CJSC, which is the main connecting link of the state's AeroSpace scientific, engineering, technological, educational, manufacturing ambitions/requirements in the Armenian environment of state and between private companies, research/educational institutions, educational complexes and academic institutions and individuals working/creating in the field. AASA performs the coordination, concentration, efficient use, as well as commercialization of the Armenian scientific potential.",
      title: "About AASA ",
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



 
  return (
    <div
      className=" w-full min-h-[80vh] bg-re  py-9 flex flex-col justify-center items-center text-red-200"
      style={{ background: `url('/Images/gif1.gif')`,backgroundSize:"cover" }}
    >
      <div className="max-w-[1200px] p-4 mx-auto">
        <div className="flex w-[100%] flex-col items-center">
          <h2 className=" text-blue-500 text-[48px] ">{arr[0].title}</h2>
          <img className="w-[60%] my-5" src={arr[0].picture} alt="" />
          <p className=" text-blue-800 text-[20px]">{arr[0].text}</p>
        </div>
        <div className=" flex justify-center  md:justify-between flex-wrap">
          <div className=" min-w-[360px] md:w-[45%]">
            <img className="w-[100%] my-5" src={arr[1].picture} alt="" />

            <h2 className=" text-red-200  text-[25px] ">{arr[1].title}</h2>
            <p className=" text-blue-800 text-[20px]">{arr[1].text}</p>
          </div>
          <div className=" min-w-[360px]  md:w-[45%]">
            <img className="w-[100%] my-5" src={arr[2].picture} alt="" />

            <h2 className=" text-red-200  text-[25px] ">{arr[2].title}</h2>
            <p className=" text-blue-800 text-[20px]">{arr[2].text}</p>
          </div>
        </div>
        <div>
          <img className="w-[100%] my-5" src={arr[3].picture} alt="" />

          <h2 className=" text-red-200  text-[25px] ">{arr[3].title}</h2>
          <p className=" text-blue-800 text-[20px]">{arr[3].text}</p>
        </div>
      </div>
    
<Slide/>


</div>

  );
};

export default About;
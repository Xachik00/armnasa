import React, { useEffect, useState } from "react";
import Slide from "../components/partnerSlide/Slide";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFetchPrograms } from "../store/action/ProgramsAction";

const Programs = () => {
  document.title = "Programs | Armenian Nasa";
  const {Programs} = useSelector((state)=>state?.Programs);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFetchPrograms())
  },[dispatch])
 
console.log('====================================');
console.log(Programs);
console.log('====================================');
  const [indexArray, setIndexArray] = useState([0]);
  useEffect(() => {
    if (indexArray.length === 1) {
        Programs?.map((el, index) => {
        if (indexArray[indexArray.length - 1] + 3 === index) {
          setIndexArray([...indexArray, index]);
        }
      });
    }
  }, [Programs]);
  return (
    <div
      className=" min-h-[80vh] flex justify-center bg-repeat-y bg-[length:100%_auto]"
      style={{ backgroundImage: `url('/Images/gif3.gif')` }}
    >
      <div className=" w-[1600px] text-white  bg-[#4949598b] p-4">
        <h1 className=" text-[55px] text-blue-500 mt-5 felx text-center">
          AASA Programs
        </h1>
        <div className=" grid grid-cols-2  justify-center  gap-[110px] p-5">
          {indexArray.length > 1 &&
            Programs?.map((el, index) => (
              <div
                key={index}
                className={`${
                  indexArray.includes(index) ? "col-span-2" : "col-span-1"
                } flex flex-col gap-5  justify-start  `}
              >
                <img src={el.picture} alt="" className=" rounded-[12px]" />
                <h2 className=" text-[24px]">{el.title}</h2>
                <p className=" text-[18px]">{el.text}</p>
              </div>
            ))}
        </div>
        <Slide />
      </div>
    </div>
  );
};

export default Programs;

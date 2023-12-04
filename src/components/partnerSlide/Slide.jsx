import React from 'react'
import './slide.css'
const Slide = () => {
    const images = [
  
        "./Images/partner1.webp",
        "./Images/partner2.webp",
        "./Images/partner3.webp",
        "./Images/partner4.webp",
        "./Images/partner5.webp",
        "./Images/partner6.webp",
        "./Images/partner7.webp",
     
      
      ];
  return (
    <div className="container mx-auto bg-[#83839662] pl-9  pr-9  mt-9"> 
    <div className=" flex items-center justify-center w-[100%]"> 
      <div className="w-[200%] h-40  overflow-hidden relative"> 
        <div className="w-[200%] flex items-center h-40 justify-around absolute left-0 gap-20 animate"> 
          {images.map((i,index) => { 
            return ( 
              <div key={index} className="flex justify-center  items-start w-[20rem]"> 
                <img  src={i} /> 
              </div> 
            ); 
          })} 
          {images.map((i,index) => { 
            return ( 
              <div key={index} className="flex justify-center items-start w-[20rem]"> 
                <img  src={i} /> 
              </div> 
            ); 
          })} 
        </div> 
      </div> 
    </div> 
</div>
  )
}

export default Slide
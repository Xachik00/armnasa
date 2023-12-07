import React, { useState } from 'react'
import './slide.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddPartner, getFetchPartners } from '../../store/action/PartnersAction';
import { useEffect } from 'react';
import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadImageHandleradd } from '../../store/action/UploadImage';
const Slide = () => {
    // const images = [
    //     "./Images/partner1.webp",
    //     "./Images/partner2.webp",
    //     "./Images/partner3.webp",
    //     "./Images/partner4.webp",
    //     "./Images/partner5.webp",
    //     "./Images/partner6.webp",
    //     "./Images/partner7.webp",
    // ];
    
  const { Partners } = useSelector((state) => state.Partners);
  const dispatch = useDispatch();
const [addShow,setAddShow]=useState(false)
const [img, setImg] = useState("");
const [add, setAdd] = useState({

  title: "",
});

useEffect(() => {
 
    setAdd({ ...add, link_picture: [img] });

  
}, [img]);
  useEffect(() => {
    dispatch(getFetchPartners());
  }, [dispatch]);

  async function addData() {

     dispatch(AddPartner(add));
    setAddShow(false);
    setAdd({
      title: "",
    
    });
    setImg('')
    dispatch(getFetchPartners());
  }

 
  return (
    <div className="container mx-auto bg-[#83839662] sm:pl-9  sm:pr-9  sm:mt-9"> 
    <h1 className='text-center text-[28px] ' >Our Partner</h1>
    <div className=" flex items-center justify-center w-[100%]"> 
      <div className="w-[200%] sm:h-40 h-20  overflow-hidden relative"> 
        <div className="w-[200%] flex items-center sm:h-40 h-20 justify-around absolute left-0 sm:gap-20 gap-2 animate"> 
          {Partners?.map((i,index) => {
 
            return ( 
              <div key={index} className="flex justify-center  items-start w-[20rem]">
                 
                <img  src={i?.link_picture[0]} /> 
              </div> 
            ); 
          })} 
          {Partners.map((i,index) => { 
            return ( 
              <div key={index} className="flex justify-center items-start w-[20rem]"> 
                <img  src={i?.link_picture[0]} /> 
              </div> 
            ); 
          })} 
        </div> 
      </div> 
    </div> 
  {  <PlusOutlined
                className=" flex justify-center items-center hover:scale-150 cursor-pointer transition ease-out duration-700"
                onClick={() => setAddShow(true)}
              />}
              
       { addShow &&  <div className="container">
          <h1 className="text-white text-lg text-center mt-4">Add partner</h1>
          <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
            <label
              className=" w-[40%] h-60 flex justify-center"
              htmlFor="EditLogo"
            >
              {img ? (
                <img className="" src={img} alt="logo" />
              ) : (
                <div className=" w-[40%] flex mt-4 justify-center border-2 border-red-600  cursor-pointer">
                  <span className="flex items-center">upload Image</span>
                </div>
              )}
            </label>

            <input
              className="hidden"
              type="file"
              name="EditLogo"
              id="EditLogo"
              onChange={(e) => {
                uploadImageHandleradd(e, setImg);
              }}
              accept="image/*"
            />
            <textarea
              name="title"
              className=" text-[20px] sm:text-[18px] w-[60%] m-5 resize-none"
              type="text"
              value={add?.title}
              placeholder="Title"
              onChange={(e) => {
                setAdd({ ...add, title: e.target.value });
              }}
            />
          
            {
              <div className=" w-[30%] mt-4 flex justify-between text-white ">
                <CheckOutlined
                  onClick={() => {
                    addData();
                  }}
                  className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                />
                <CloseOutlined
                  onClick={() => setAddShow(false)}
                  className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                />
              </div>
            }
          </div>
        </div>}
</div>
  )
}

export default Slide
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchHome } from "../store/action/HomeAction";

const Home = () => {
    
  const { Home } = useSelector((state) => state.Home);
  const dispatch = useDispatch();

  console.log(Home);
  useEffect(() => {
    dispatch(getFetchHome());
  }, [dispatch]);

  return (
    <div
      className="  w-full min-h-[60vh] sm:min-h-[80vh] flex justify-center items-center"
      style={{ background: `url(${Home[0]?.picture})` }}
    >
      <div className=" sm:w-[43%] text-center">
        {Home?.map((el, index) => {
          return (
            <div key={index + 1}>
              <h1 className=" text-blue-500 text-[35px] sm:text-[55px]">
                {Home[0]?.title}
              </h1>
              <p className=" text-[20px] sm:text-[30px]  text-white">
                {Home[0]?.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

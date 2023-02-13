import React from "react";

import NavigationSkeleton from "./NavigationSkeleton";
const SidebarSkeleton = () => {
  return (
    <div className="hidden md:block lg:w-64 bg-white h-screen  font-roboto ">
      <div className="sidebar fixed w-64 flex flex-col gap-3 px-4 mt-3 h-screen pb-20">
        {/* 
        top section
        */}
        <div>
          <div className="hidden md:w-16 lg:w-56 h-16 lg:h-24 mt-6 lg:mt-1 bg-white shadow-2xl md:flex rounded-md items-center border mb-4">
            <div className=" flex flex-row items-center justify-center pl-5 gap-3">
              <div className="h-10 w-10 rounded-md object-cover mx-auto md:mx-0 bg-gra-400 animate-ping"></div>
              <div className="lg:flex flex-col hidden ">
                <h4 className="font-semibold tracking-tight w-24 h-2 bg-gray-400 animate-pulse"></h4>
                <span className="text-xs text-slate-500 w-20 h-2 bg-dark-400 animate-pulse"></span>
              </div>
            </div>
          </div>
          {/* end of top section */}
          {/* routings */}
          <div className="hidden md:block md:w-16 lg:w-56 bg-white shadow-2xl  rounded-md h-auto pb-3 pt-3 mt-2">
            <NavigationSkeleton />
          </div>
          <div className="flex justify-start flex-col">
            <div className="lg:flex px-2 justify-between mt-4 mb-2 items-center hidden">
              <h4 className="font-semibold text-gray-400 w-20 h-3 bg-gray-400"></h4>
              <div className="h-4 w-4 bg-dark-400 rounded-full text-center text-xs font-bold text-white animate-pulse"></div>
            </div>

            <div className="h-72 hidden lg:block bg-gray-400 animate-pulse"></div>
            <div className="lg:flex justify-between px-2 items-center mt-4 hidden">
              <button className="h-9 w-24 bg-gray-400 animate-pulse"></button>
              <div className="h-9 w-9 rounded-md  flex justify-center items-center bg-gray-400 animate-pulse">
                <button className="h-7 w-7 bg-gray-400"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;

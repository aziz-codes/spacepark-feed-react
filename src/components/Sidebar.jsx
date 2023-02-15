import React from "react";

import Navigation from "../layouts/Navigation";
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Button from "../layouts/Button";
const Sidebar = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const image =
    "https://images.pexels.com/photos/4144828/pexels-photo-4144828.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="hidden md:block lg:w-64 bg-white h-screen  font-roboto ">
      <div className="sidebar fixed w-64 flex flex-col gap-3 px-4 mt-3 h-screen overflow-y-auto pb-20">
        {/* 
        top section
        */}
        <div>
          <div className="hidden md:w-16 lg:w-56 h-16 lg:h-24 mt-6 lg:mt-1 bg-white shadow-2xl md:flex rounded-md items-center border mb-4">
            <div className=" flex flex-row items-center justify-center pl-5 gap-3">
              <img
                src={user && user.photoURL}
                className="h-10 w-10 rounded-md object-cover mx-auto md:mx-0"
              />
              <div className="lg:flex flex-col hidden ">
                <h4 className="font-semibold tracking-tight">
                  {user && user.displayName}
                </h4>
                <span className="text-xs text-slate-500">
                  {user &&
                    user.displayName.toString().replace(" ", "").toLowerCase()}
                </span>
              </div>
            </div>
          </div>
          {/* end of top section */}
          {/* routings */}
          <div className="hidden md:block md:w-16 lg:w-56 bg-white shadow-2xl  rounded-md h-auto pb-3 pt-3 mt-2">
            <Navigation />
          </div>
          <div className="flex justify-start flex-col">
            <div className="lg:flex px-2 justify-between mt-4 mb-2 items-center hidden">
              <h4 className="font-semibold text-gray-400">Invitations</h4>
              <div className="h-4 w-4 bg-red-500 rounded-full text-center text-xs font-bold text-white">
                5
              </div>
            </div>

            <div className="h-72 hidden lg:block">
              <img src={image} className="object-fill h-full rounded-md" />
            </div>
            <div className="lg:flex justify-between px-2 items-center mt-4 hidden">
              <Button Icon={PaperAirplaneIcon} text="More" />
              <div className="h-9 w-9 rounded-md bg-gray-200 flex justify-center items-center">
                <XCircleIcon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

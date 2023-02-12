import React from "react";
import user from "../assets/user.png";
import Navigation from "../layouts/Navigation";
const Sidebar = () => {
  const image =
    "https://images.pexels.com/photos/4144828/pexels-photo-4144828.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className=" sm:w-20 md:w-64 bg-white   font-roboto ">
      <div className="sidebar fixed w-64 flex flex-col gap-3 px-4 mt-3 h-screen overflow-y-auto pb-5">
        {/* 
        top section
        */}
        <div>
          <div className="w-56 h-24 bg-white shadow-2xl flex rounded-md items-center border">
            <div className=" flex flex-row items-center justify-center pl-5 gap-3">
              <img src={user} className="h-10 w-10 rounded-md object-cover " />
              <div className="flex flex-col">
                <h4 className="font-semibold tracking-tight">
                  Alexendra Borke
                </h4>
                <span className="text-xs text-slate-500">@alexsunshine</span>
              </div>
            </div>
          </div>
          {/* end of top section */}
          {/* routings */}
          <div className="w-56 bg-white shadow-2xl  rounded-md h-auto pb-3 ">
            <Navigation />
          </div>
          <div className="flex justify-start flex-col" aria-disabled="true">
            <h4 className="font-semibold text-gray-400">Invitations</h4>
            <div className="h-72">
              <img src={image} className="object-fill h-full rounded-md" />
              <h4 className="absolute bottom-2  text-xl px-2 font-extrabold text-red-500">
                How to build a strong company
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

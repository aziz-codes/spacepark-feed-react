import React from "react";
import user from "../assets/user.png";
import Navigation from "../layouts/Navigation";
const Sidebar = () => {
  return (
    <div className="sm:w-20 md:w-72 bg-white h-screen font-roboto">
      <div className="fixed w-72 flex flex-col gap-3 items-center mt-3">
        {/* 
        top section
        */}
        <div className="w-56 h-24  bg-white shadow-2xl flex rounded-md items-center border">
          <div className=" flex flex-row items-center justify-center pl-5 gap-3">
            <img src={user} className="h-10 w-10 rounded-md object-cover " />
            <div className="flex flex-col">
              <h4 className="font-semibold tracking-tight">Alexendra Borke</h4>
              <span className="text-xs text-slate-500">@alexsunshine</span>
            </div>
          </div>
        </div>
        {/* end of top section */}
        {/* routings */}
        <div className="w-56 bg-white shadow-2xl  rounded-md h-auto pb-3 ">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

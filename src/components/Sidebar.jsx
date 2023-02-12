import React from "react";
import user from "../assets/user.png";
import Navigation from "../layouts/Navigation";
const Sidebar = () => {
  const image =
    "https://images.pexels.com/photos/4144828/pexels-photo-4144828.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="sm:w-20 md:w-64 bg-white h-screen  font-roboto ">
      <div className="fixed w-64 flex flex-col gap-3 px-4 mt-3 h-screen overflow-y-auto">
        {/* 
        top section
        */}
        <div className="relative w-56 h-48  bg-white shadow-2xl flex rounded-md items-center border">
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
        <div className="flex justify-start flex-col" aria-disabled="true">
          <h4 className="font-semibold text-gray-400">Invitations</h4>
          <div className="h-72">
            <img src={image} className="object-contain rounded-md" />
            <h4>How to build a strong company</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            tenetur amet recusandae qui cumque at eligendi est dolor asperiores
            iusto ipsum dolorum ullam doloremque obcaecati adipisci voluptas id
            voluptatum quis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

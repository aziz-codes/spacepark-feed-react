import React from "react";

const NavbarSkeleton = () => {
  return (
    <div className="sticky w-full  h-14 border-b items-center top-0 bg-gray-300 animate-pulse">
      <div className="relative flex justify-between px-2 h-full items-center">
        <div className="flex gap-3">
          <div className="h-7 w-7 rounded-sm bg-slate-100 shadow-xl">
            <div className="h-6 w-6 bg-gray-300 animate-pulse"></div>
          </div>
          <span className="font-semibold tracking-tight bg-gray-300 animate-pulse"></span>
        </div>
        <div className="w-44 bg-gray-300 animate-pulse"></div>
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-gray-300 animate-pulse"></div>
          <div className="h-8 w-8 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;

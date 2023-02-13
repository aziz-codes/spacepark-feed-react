import React from "react";
import { dummy } from "../assets/dummy";
const NavigationSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-4 ">
        {dummy.map((link, index) => (
          <div className="w-24 bg-gray-400 animate-pulse" key={index}>
            <div className="flex gap-2">
              <span className="h-5 w-5 bg-gray-400 animate-pulse"></span>
              <h4 className="font-extrabold tracking-tight text-sm hidden lg:block w-24 bg-gray-400 animate-pulse"></h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavigationSkeleton;

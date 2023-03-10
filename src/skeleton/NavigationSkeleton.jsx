import React from "react";
import { dummy } from "../assets/dummy";
const NavigationSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-4 w-56">
        {dummy.map((_, index) => (
          <div
            className="flex flex-row w-full px-1 gap-2 items-center"
            key={index}
          >
            <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"></div>
            <div className="h-3 w-48 rounded-full bg-gray-300 animate-pulse"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavigationSkeleton;

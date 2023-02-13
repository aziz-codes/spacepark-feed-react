// used for pre loading
import React from "react";
const data = "users";
const ContactsSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 p-2 w-full px-4 animate-pulse">
      {data.split().map((_, index) => (
        <div
          key={index}
          className="flex flex-row items-center px-2 w-full rounded-sm shadow-sm  justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gray-500"></div>
            <label className="text-xs font-bold p-1 bg-gray-500"></label>
          </div>
          <div className="h-2 w-2 rounded-full bg-gray-500"></div>
        </div>
      ))}
    </div>
  );
};

export default ContactsSkeleton;

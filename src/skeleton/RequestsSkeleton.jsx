import React from "react";
import { requests } from "../layouts/data";
const RequestsSkeleton = () => {
  return (
    <section className="w-72  flex flex-col gap-4 px-4 mt-4">
      {requests.slice(0, 2).map((_, index) => (
        <div
          className="shadow-md rounded-md  h-28 flex flex-col  w-full  bg-white gap-1 border animate-pulse"
          role="status"
          key={index}
        >
          <div className="flex flex-row gap-2 items-center px-2 py-2 pb-2">
            <div className="h-10 w-10 rounded-md object-cover bg-gray-300"></div>
            <label className="text-xs font-semibold ">
              <span className="text-xs font-light bg-gray-300 animate-pulse"></span>
            </label>
          </div>
          <div className="flex flex-row justify-between px-2 animate-pulse">
            <button className="rounded-md text-sm font-bold bg-gray-300 text-white p-2 w-24"></button>
            <button className="rounded-md text-sm font-bold bg-gray-300 border text-black p-2 w-24 animate-pulse"></button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RequestsSkeleton;

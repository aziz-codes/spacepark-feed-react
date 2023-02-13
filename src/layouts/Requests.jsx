import React from "react";
import { requests } from "./data";
const Requests = () => {
  return (
    <section className="w-72  flex flex-col gap-4 px-4 mt-4">
      {requests.slice(0, 2).map((request, index) => (
        <div className="shadow-md rounded-md  h-28 flex flex-col  w-full  bg-white gap-1 border">
          <div
            className="flex flex-row gap-2 items-center px-2 py-2 pb-2"
            key={index}
          >
            <img
              src={request.avatar}
              className="h-10 w-10 rounded-md object-cover"
            />
            <label className="text-xs font-semibold ">
              {request.name}{" "}
              <span className="text-xs font-light">
                wants to add you to friend
              </span>
            </label>
          </div>
          <div className="flex flex-row justify-between px-2">
            <button className="rounded-md text-sm font-bold bg-superblue text-white p-2 w-24">
              Accept
            </button>
            <button className="rounded-md text-sm font-bold bg-white border text-black p-2 w-24 ">
              Decline
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Requests;

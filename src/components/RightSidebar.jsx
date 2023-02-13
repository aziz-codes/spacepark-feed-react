import React, { Suspense, lazy } from "react";
import Contacts from "./Contacts";

const Requests = lazy(() => import("../layouts/Requests"));
const RightSidebar = () => {
  return (
    <div className="w-72 bg-white hidden lg:block h-screen ">
      <div className="fixed h-screen overflow-y-auto mt-2">
        <div className="w-full">
          <div className="flex justify-between px-4 items-center w-full ">
            <h4 className="text-gray-400 uppercase font-bold tracking-normal text-sm">
              Requests
            </h4>
            <div className="h-4 w-4 rounded-full bg-superblue text-center text-xs text-white font-bold">
              5
            </div>
          </div>
          <Suspense fallback="Loading ...">
            <Requests />
          </Suspense>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

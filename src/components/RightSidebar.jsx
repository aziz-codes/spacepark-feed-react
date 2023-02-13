import React, { Suspense, lazy } from "react";
import ContactsSkeleton from "../skeleton/ContactsSkeleton";
import RequestsSkeleton from "../skeleton/RequestsSkeleton";
const Requests = lazy(() => import("../layouts/Requests"));
const Contacts = lazy(() => import("./Contacts"));
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
          <Suspense fallback={<RequestsSkeleton />}>
            <Requests />
          </Suspense>
          <Suspense fallback={<ContactsSkeleton />}>
            <Contacts />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

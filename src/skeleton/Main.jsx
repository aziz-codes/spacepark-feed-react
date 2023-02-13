import React from "react";
import NavbarSkeleton from "./NavbarSkeleton";
import SidebarSkeleton from "./SidebarSkeleton";
const Main = () => {
  return (
    <div className="flex flex-col">
      <NavbarSkeleton />
      <SidebarSkeleton />
    </div>
  );
};

export default Main;

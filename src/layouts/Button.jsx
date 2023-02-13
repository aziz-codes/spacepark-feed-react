import React from "react";

const Button = ({ text, Icon }) => {
  return (
    <div
      className="hidden bg-superblue border-none p-1.5 w-24 md:flex items-center justify-center 
    gap-2 max-w-24 rounded-md mx-2 cursor-pointer"
    >
      <Icon className=" border-[1.5px] text-white rounded-md font-extrabold h-4 w-4" />
      <span className="text-white capitalize font-semibold tracking-tight">
        {text}
      </span>
    </div>
  );
};

export default Button;

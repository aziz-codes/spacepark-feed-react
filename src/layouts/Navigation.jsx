import { dummy } from "../assets/dummy";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const normalLink =
    "relative w-full  flex flex-row justify-between px-4 items-center py-1 pl-5 text-gray-400";
  const activeLink =
    "relative w-full  flex flex-row justify-between px-4 items-center py-1 pl-5 text-superblue border-l-2 border-l-superblue";
  return (
    <>
      <div className="flex flex-col gap-4 mt-4 ">
        {dummy.map((link, index) => (
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            key={index}
            to={link.path}
          >
            <div className="flex gap-2">
              <span className="h-5 w-5 ">{link.icon}</span>
              <h4 className="font-extrabold tracking-tight text-sm">
                {link.label}
              </h4>
            </div>
            {link.newNotifications && (
              <div className="h-4 w-4 rounded-full bg-superblue text-xs font-semibold tracking-tighter text-white text-center">
                {link.newNotifications}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navigation;

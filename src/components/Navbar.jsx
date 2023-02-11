import logo from "../assets/icon.png";
import user from "../assets/user.png";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "../layouts/Button";
const Navbar = () => {
  return (
    <nav className=" w-full  h-14 border-b items-center">
      <div className="relative flex justify-between px-2 h-full items-center">
        <div className="flex gap-3">
          <div className="h-7 w-7 rounded-sm bg-slate-100 shadow-xl">
            <img src={logo} className="h-6 w-6 " alt="logo" />
          </div>
          <span className="font-semibold tracking-tight ">Spacepark</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex  bg-gray-100 border rounded-md items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-300 mx-1" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none p-1 bg-transparent"
            />
          </div>
          <Button text="Create" Icon={PlusIcon} />
          <div className="h-10 w-10 rounded-md bg-red-500 flex justify-center items-center relative">
            <img
              src={user}
              className="h-8 w-8 m-auto z-50 object-cover absolute top-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

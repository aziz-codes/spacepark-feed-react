import logo from "../assets/icon.png";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "../layouts/Button";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Store } from "../context/Context";
const Navbar = () => {
  const { data } = useFetch();

  const { user, logout, setLoggedIn } = Store();
  const [searchedResult, setSearchedResult] = useState([]);
  const handleChange = (e) => {
    let result = data.filter((item) =>
      item.name.toLowerCase().includes(e.toLowerCase())
    );
    setSearchedResult(result);
    if (e.length === 0) {
      setSearchedResult([]);
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    logout();
  };
  return (
    <nav className="sticky w-full  h-14 border-b items-center top-0 bg-white bg-opacity-95 z-50 ">
      <div className="relative flex justify-between px-2 h-full items-center">
        <div className="flex gap-3">
          <div className="h-7 w-7 rounded-sm bg-slate-100 shadow-xl">
            <img src={logo} className="h-6 w-6 " alt="logo" />
          </div>
          <span className="font-semibold tracking-tight ">Spacepark</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative md:flex  bg-gray-100 border rounded-md items-center hidden ">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-300 mx-1" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none p-1 bg-transparent"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            {searchedResult.length > 0 ? (
              <div className="absolute top-8 w-full bg-white shadow-2xl border p-2 flex flex-col gap-4 rounded-md ">
                {searchedResult.map((item, i) => (
                  <NavLink
                    key={i}
                    className="text-sm font-semibold hover:text-sky-500 shadow-sm py-1 "
                    to={`/user/${item.id}`}
                    onClick={() => {
                      setSearchedResult([]);
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>
          <Button text="Create" Icon={PlusIcon} />
          <button className="h-8 w-8 text-lg font-bold text-white block md:hidden rounded-md border-none bg-superblue">
            +
          </button>
          <div
            className="h-10 w-10 rounded-md bg-red-500 flex justify-center items-center relative cursor-pointer"
            onClick={handleLogout}
          >
            <img
              src={user && user.photoURL}
              className="h-8 w-8 m-auto z-50 object-cover absolute top-2 cursor-pointer"
              title="Logout"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

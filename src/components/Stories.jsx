import React, { useState, useEffect } from "react";
import { storiesPost } from "../layouts/data";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/24/outline";
const Stories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      const { data } = res.data;
      const list = data.slice(0, 4).map((user, index) => ({
        name: user.first_name,
        post: storiesPost[index].post,
        avatar: user.avatar,
      }));
      setData(list);
    });
  }, []);
  return (
    <div className=" flex flex-row gap-2 w-full bg-white px-4">
      <div
        className="relative h-48 w-32 bg-cover rounded-md shadow-lg hover:scale-110 cursor-pointer transition-all duration-150 ease-out hover:z-49"
        style={{ backgroundImage: `url(${storiesPost[4].post})` }}
      >
        <div className="absolute flex flex-col gap-1 bottom-4 items-center w-full">
          <div className="h-9 w-9 rounded-md bg-white p-2 border flex items-center justify-center">
            <PlusIcon className="relative h-full w-full text-superblue " />
          </div>
          <h4 className="font-bold text-white text-sm tracking-wide">
            Add Story
          </h4>
        </div>
      </div>
      {data.map((req, index) => (
        <div
          className="relative h-48 w-32 bg-cover rounded-md shadow-lg hover:scale-110 cursor-pointer transition-all duration-150 ease-out hover:z-50"
          style={{ backgroundImage: `url(${req.post})` }}
          key={index}
        >
          <div className="absolute flex flex-col h-full justify-between py-3 ml-6">
            <img
              className="h-10 w-10 rounded-md p-0.5 border"
              src={req.avatar}
              alt={req.name}
            />
            <h4 className="font-bold text-white text-sm tracking-wide">
              {req.name}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;

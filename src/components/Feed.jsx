import React, { useState, useEffect } from "react";
import { storiesPost, feedPost, requests } from "../layouts/data";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      const { data } = res.data;
      const list = data.slice(0, 4).map((user, index) => ({
        name: user.first_name,
        post: storiesPost[index].post,
        avatar: user.avatar,
        postDescription: feedPost[index].description,
      }));
      setData(list);
    });
  }, []);
  return (
    <section className="w-full max-w-lg rounded-sm    py-2">
      {data.map((item, index) => (
        <div className="flex flex-col border mt-4 mb-4">
          <div className="flex flex-row justify-between px-2 p-2" key={index}>
            <div className="items-center flex flex-row gap-2">
              <img src={item.avatar} className="h-12 w-12 rounded-md" />
              <div className="flex flex-col">
                <label className="text-sm font-semibold">{item.name}</label>
                <p className="text-xs text-gray-400">12 hours ago</p>
              </div>
            </div>
            <div>...</div>
          </div>
          <div className="max-w-lg  mt-3">
            <h4 className="flex flex-wrap  whitespace-normal text-xs p-2">
              {item.postDescription}
            </h4>
            <div
              className="max-w-lg bg-red-500 bg-cover h-96"
              style={{ backgroundImage: `url(${item.post})` }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feed;

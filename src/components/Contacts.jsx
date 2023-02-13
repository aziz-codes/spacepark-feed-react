import axios from "axios";
import { useState, useEffect } from "react";
const Contacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      const { data } = res.data;
      setData(data);
      console.log(res);
    });
  }, []);
  return (
    <div className="flex flex-col gap-3 p-2 w-full px-4">
      {data.map((user, index) => (
        <div
          key={index}
          className="flex flex-row items-center px-2 w-full rounded-sm shadow-sm  justify-between"
        >
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              className="h-9 w-9 rounded-md"
              alt={user.first_name}
            />
            <label className="text-xs font-bold">
              {user.first_name + " " + user.last_name}
            </label>
          </div>
          <div
            className={`h-2 w-2 rounded-full ${
              index % 2 === 0 ? "bg-green-700" : "bg-slate-500"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;

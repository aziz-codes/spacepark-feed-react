import { useState, useLayoutEffect } from "react";
import axios from "axios";
export default function useFetch() {
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      const { data } = res.data;
      const list = data.map((user) => ({
        name: user.first_name + " " + user.last_name,
        id: user.id,
      }));
      setData(list);
    });
  }, []);
  return { data };
}

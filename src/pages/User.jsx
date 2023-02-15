import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../layouts/Loader";
import axios from "axios";
const User = () => {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      const { data } = res.data;
      setUser(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <section className="flex justify-center text-center items-center my-10">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col px-3">
          <img
            src={user.avatar}
            className="h-40 w-40 rounded-full bg-contain"
          />
          <h4 className="font-bold">
            {user.first_name + " " + user.last_name}
          </h4>
          <a
            href={`mailto:${user.email}`}
            className="text-xs hover:text-sky-500"
          >
            {user.email}
          </a>
        </div>
      )}
    </section>
  );
};

export default User;

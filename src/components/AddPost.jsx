import React from "react";
import user from "../assets/user.png";
import { ShareIcon } from "@heroicons/react/24/outline";
import Button from "../layouts/Button";
const AddPost = () => {
  return (
    <section className="pl-4 pr-4 w-full bg-white shadow-md rounded-sm pt-4 pb-4 flex flex-row justify-between max-w-lg">
      <div className="flex flex-row gap-3 flex-1">
        <img src={user} className="h-8 w-8 object-cover " />
        <input
          type="tex"
          placeholder="What's new, alendra ?"
          className="outline-none bg-transparent p-1 w-full"
        />
      </div>
      <Button text="Post it!" Icon={ShareIcon} />
    </section>
  );
};

export default AddPost;

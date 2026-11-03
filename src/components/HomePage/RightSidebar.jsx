import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RightSidebar = () => {
  return (
    <div className="grid px-2">
      <h2 className="mt-2 font-bold text-3xl">Login With</h2>
      <div className="flex flex-col mt-3">
        <button className="btn text-lg border-blue-500 text-blue-500">
          login with google <FcGoogle />
        </button>
      </div>

      <div className="flex flex-col mt-3">
        <button className="btn text-lg border-black">
          login with github <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;

"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RightSidebar = () => {

  const handleGoogleSignin =  async () => {
     const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
  }
  const handleGithubSignin =  async () => {
     const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data);

  }
  return (
    <div className="grid px-2">
      <h2 className="mt-2 font-bold text-3xl">Login With</h2>
      <div className="flex flex-col mt-3">
        <button className="btn text-lg border-blue-500 text-blue-500" onClick={() =>{handleGoogleSignin()}}>
          login with google <FcGoogle />
        </button>
      </div>

      <div className="flex flex-col mt-3">
        <button className="btn text-lg border-black" onClick={() =>{handleGithubSignin()}}>
          login with github <FaGithub />
        </button>
      </div>
      <div className="flex flex-col mt-3">
        <button className="btn text-lg border-black" onClick={() =>{handleFacebookSignin()}}>
          login with Facebook <FaFacebook />
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;

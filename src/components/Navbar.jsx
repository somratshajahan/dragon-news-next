"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import profile from "@/assets/user.png";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
 
  return (
    <div className="flex justify-between container mx-auto gap-20 mt-4">
      <div></div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="flex items-center gap-4 text-gray-600 font-semibold">
          <li>
            <Navlink href={"/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href={"/about"}>About</Navlink>
          </li>
          <li>
            <Navlink href={"/career"} className={"text-yellow-500"}>
              Career
            </Navlink>
          </li>
        </ul>
      </Suspense>
      {isPending ? <h2>Loading....</h2> : user ? (
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <Image
              src={user.image || profile} 
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <button
              onClick={() => authClient.signOut()}
              className="btn bg-red-600 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <button className="btn bg-blue-700 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;

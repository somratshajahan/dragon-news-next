"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
import { startTransition, useEffect, useState } from "react";

const Header = () => {
  const [now, setNow] = useState(null);
  useEffect(() => {
    startTransition(() => {
      setNow(Date.now());
    });
    const id = setInterval(() => {
      startTransition(() => {
        setNow(Date.now());
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <Image
          className="mt-10"
          src={logo}
          height={200}
          width={300}
          alt="logo"
        ></Image>
      </div>
      <h4 className="text-center mt-3">Journalism Without Fear or Favour</h4>
      <p>{now ? format(new Date(now), "EEE, dd MMM yyyy, hh:mm:ss a") : "…"}</p>
    </div>
  );
};

export default Header;

import { assets } from "@/assets/assets";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pb-8 md:pb-12 flex justify-between  mx-4 py-3 lg:mx-44 flex-col md:flex-row gap-2">
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <img src={assets.logo} className="w-36 p-4" alt="" />
        <div className="abosulte h-6 m-2 border hidden md:block"></div>
        <p className="p-4 text-gray-500">
          All Rights reserved. Copyright @bg erase
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 md:gap-4 ">
        <div className="border rounded-full p-2 bg-white shadow-lg border-gray-500 hover:scale-105">
          <Facebook />
        </div>
        <div className="border rounded-full p-2 bg-white shadow-lg border-gray-500 hover:scale-105">
          <Twitter />
        </div>
        <div className="border rounded-full p-2 bg-white shadow-lg border-gray-500 hover:scale-105">
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useContext } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Upload } from "lucide-react";
import { assets } from "@/assets/assets";
import { AppContext } from "@/context/appContext";

const Header = () => {

    const {removeBg} = useContext(AppContext)



  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-0 gap-10">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4 xl font-bold leading-snug">
            Remove Image Backgrounds Instantly <br /> No Hassle, No Compromise
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Turn any image into a clean, professional asset in seconds. <br />
            Perfect for e-commerce, presentations, social media, or personal
            projects.
          </p>
          <div className="flex md:w-[50%] border-2 border-dashed border-gray-300 rounded-lg  items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
            <input type="file" id="upload1" hidden onChange={ e =>removeBg(e.target.files[0])} accept="image/*" />
            <label
              htmlFor="upload1"
              className="flex p-2 items-center justify-center gap-3 cursor-pointer"
            >
              {/* Replace <Upload /> with your upload icon component */}
              <p className="text-gray-700 font-medium hover:text-blue-500">
                Upload your image!
              </p>
              <Upload className="w-8 h-8 text-blue-900" />
            </label>
          </div>
        </div>

        {/* Right side (placeholder for image or illustration) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.header_img} // Replace with your image
            alt="Background removal illustration"
            className="w-full max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

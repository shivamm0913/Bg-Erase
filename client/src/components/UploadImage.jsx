import { AppContext } from "@/context/AppContext";
import { Upload } from "lucide-react";
import React, { useContext } from "react";

const UploadImage = () => {

  const {removeBg} = useContext(AppContext)

  return (
    <div className="pb-16 bg-slate-50 ">
      <h1
        className="text-center text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent p-2 m-12 sm:m-20"
      >
        See the magic. Try now
      </h1>
      <div className="flex max-w-4xl mx-10 md:mx-auto md:w-[25%] border-2  border-blue-300 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500  rounded-full  items-center justify-center hover:border-pink-500 hover:scale-102  transition-all duration-300 cursor-pointer">
        <input onChange={e=>removeBg(e.target.files[0])} type="file" accept="image/*" id="upload1" hidden />
        <label
          htmlFor="upload1"
          className="flex p-2 items-center justify-center gap-3 cursor-pointer hover:gap-5 transition-all "  
        >
          {/* Replace <Upload /> with your upload icon component */}
          <p className="text-white font-medium ">
            Upload your image!
          </p>
          <Upload className="w-8 h-8 text-white" />
        </label>
      </div>
    </div>
  );
};

export default UploadImage;

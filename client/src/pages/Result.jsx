import { assets } from "@/assets/assets";
import { AppContext } from "@/context/appContext";
import { Download } from "lucide-react";
import React, { useContext } from "react";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        {/* image continer */}
        <div className="flex flex-col sm:grid   grid-cols-2 gap-8">
          {/* left side */}
          <div className="border-gray-300">
            <p className="font-semibold text-gray-600 mb-2 ">Original</p>
            <div className="rounded-md border flex justify-center items-center border-gray-300 h-auto  ">
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="rounded-md  "
              />
            )}
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-600 mb-2 ">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer">
              {resultImage && (
                <img
                  src={resultImage || undefined}
                  alt=""
                  className="rounded-md  border-gray-300 h-full relative bg-layer"
                />
              )}
              {!resultImage && image && (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* buttons */}
        { resultImage && <div className=" flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-300">
            Try Another Image
          </button>
          <a
            href={resultImage} download
            className="flex gap-2 justify-center items-center px-8 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-300"
          >
            Download Image <Download size={19} />{" "}
          </a>
        </div> }
      </div>
    </div>
  );
};

export default Result;

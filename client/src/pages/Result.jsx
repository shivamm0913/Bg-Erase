import { appContext } from "@/context/appContext";
import { Download } from "lucide-react";
import React, { useContext } from "react";

const Result = () => {
  const { resultImage, image } = useContext(appContext);
  const {removeBg} = useContext(appContext)
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        {/* image container */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          
          {/* left side */}
          <div className="border-gray-300">
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <div className="rounded-md border flex justify-center items-center border-gray-300 h-[250px] sm:h-[350px] w-full overflow-hidden bg-gray-50">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Original"
                  className="rounded-md max-h-full max-w-full object-contain"
                />
              ) : (
                <p className="text-gray-400 text-sm">No Image Uploaded</p>
              )}
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">Background Removed</p>
            <div className="rounded-md border border-gray-300 h-[250px] sm:h-[350px] w-full relative bg-gray-50 flex items-center justify-center">
              {resultImage ? (
                <img
                  src={resultImage}
                  alt="Result"
                  className="rounded-md max-h-full max-w-full object-contain"
                />
              ) : image ? (
                <div className="absolute">
                  <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No Result Yet</p>
              )}
            </div>
          </div>
        </div>

        {/* buttons */}
        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
            <input type="file" id="upload3" hidden onChange={ e =>removeBg(e.target.files[0])} accept="image/*" />
            <label htmlFor="upload3"  className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-300">
              Try Another Image
            </label>
            <a
              href={resultImage}
              download
              className="flex gap-2 justify-center items-center px-8 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-300"
            >
              Download Image <Download size={19} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;

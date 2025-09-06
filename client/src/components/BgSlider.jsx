import { assets } from "@/assets/assets";
import { GripVertical } from "lucide-react";
import React, { useState } from "react";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="text-center  pb-10 md:py-20 mx-2 ">
      <h1
        className="text-3xl md:text-4xl font-bold 
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              bg-clip-text text-transparent p-2 mb-12 sm:mb-20"
      >
        Remove Background with high <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl border">
        {/* Background image */}
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
          className=""
        />

        {/* Foreground image */}
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* ✅ Slider correctly placed */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider "
        />
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 z-30"
        style={{ left: `${sliderPosition}%` }}
      ></div>
    </div>
  );
};

export default BgSlider;

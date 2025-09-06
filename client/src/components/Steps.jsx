import React from "react";
import { removalStep } from "@/data/step";
import * as LucideIcons from "lucide-react"; // import all Lucide icons

const Steps = () => {
  return (
    <section className="py-20 bg-gray-50 ">
      <div className="container mx-auto px- max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent p-2">
            Steps to Remove Background Images in Seconds
          </h1>
          <p className="mt-4 text-lg 
            bg-gradient-to-r from-gray-700 via-gray-900 to-black 
            bg-clip-text text-transparent">
            Follow these simple steps to get a clean, transparent background instantly.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {removalStep.map((step, index) => {
            // dynamically get the icon component from the string
            const IconComponent = LucideIcons[step.icon];

            return (
              <div
                key={index}
                className="bg-white  mx-5 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  {/* Render the icon */}
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-blue-500" />
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.name}
                </h2>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;

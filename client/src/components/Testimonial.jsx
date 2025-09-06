import React from 'react'
import { testimonialsData } from '@/assets/assets'
// Mock data for demonstration
const Testimonial = () => {
  return (
    <div className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
      <h1
        className="text-center text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent p-2 mb-12 sm:mb-20"
      >
        Customer Testimonials
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 py-8'>
        {testimonialsData.map((item, index) => (
          <div 
            className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl max-w-lg mx-auto hover:scale-105 transition-all duration-300 border border-gray-100 relative overflow-hidden' 
            key={index}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Quote icon */}
            <div className="text-blue-500 text-4xl font-bold mb-4 opacity-20">"</div>
            
            {/* Testimonial text */}
            <p className="text-gray-700 leading-relaxed mb-6 italic text-sm md:text-base">
              {item.text}
            </p>
            
            {/* Author section */}
            <div className="flex items-center gap-4">
              <img 
                src={item.image} 
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.author}
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
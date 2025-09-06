import React from 'react'
import { assets, plans } from '@/assets/assets';
const BuyCredit = () => {
  return (
    <div className='py-16 bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
          <span className="text-gray-600 text-sm font-medium">OUR PLANS</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Choose the plan that's right for you
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4'>
        {plans.map((plan, index) => (
          <div 
            key={index}
            className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden hover:scale-105'
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Plan Icon */}
            <div className="mb-6">
              <div className="w-12 h-12  rounded-lg flex items-center justify-center">
               <img src="/favicon.svg" alt="" />
              </div>
            </div>

            {/* Plan Details */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.id}</h3>
              <p className="text-gray-600 text-sm">{plan.desc}</p>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-500 ml-2">/ {plan.credits} credits</span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white`}
            >
              {plan.id === 'Business' ? 'Purchase' : 'Get started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit;
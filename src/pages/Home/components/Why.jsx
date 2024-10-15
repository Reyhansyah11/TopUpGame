import React from 'react';
import { Shield, Clock, Award, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "100% Aman & Terpercaya",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Proses Otomatis 24 Jam",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Harga Termurah",
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-500" />,
      title: "Customer Service 24 Jam",
    }
  ];

  return (
    <div className="bg-blue-600 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-white">
            KENAPA HARUS TOP UP DI DUNIA GAMES?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold mb-3">
                {feature.title}
              </h3>     
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
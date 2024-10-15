import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Data carousel - ganti URL gambar sesuai kebutuhan
  const slides = [
    {
      url: "/images/Hu Tao (21).jpeg",
      title: "Slide 1",
      description: "Deskripsi untuk slide 1"
    },
    {
      url: "/images/Hu Tao (10).jpeg",
      title: "Slide 2",
      description: "Deskripsi untuk slide 2"
    },
    {
      url: "/images/Hu Tao (25).jpeg",
      title: "Slide 3",
      description: "Deskripsi untuk slide 3"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Ganti slide setiap 5 detik
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const previousSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[1200px] h-[400px] mx-auto my-10  ">
      {/* Main carousel container */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* Slides */}
        <div
          className="w-full h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: 'flex',
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-800 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-800 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 scale-110 w-7'
                  : 'bg-white hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm transition-all"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
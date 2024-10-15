import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCards() {
  // Data produk - sesuaikan dengan kebutuhan Anda
  const products = [
    {
      id: 1,
      title: "Produk 1",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 2,
      title: "Produk 2",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 3,
      title: "Produk 3",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 4,
      title: "Produk 4",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 5,
      title: "Produk 1",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 6,
      title: "Produk 2",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 7,
      title: "Produk 3",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 8,
      title: "Produk 4",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 9,
      title: "Produk 1",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 10,
      title: "Produk 2",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 11,
      title: "Produk 3",
      image: "/images/Hu Tao (8).jpeg",
    },
    {
      id: 12,
      title: "Produk 4",
      image: "/images/Hu Tao (8).jpeg",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Content Container */}
              <div className="p-5">
                <h3 className="text-xl text-center font-semibold mb-2">
                  {product.title}
                </h3>

                {/* <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-blue-600">
                  {product.price}
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div> */}

                {/* Buttons */}
                <div className="space-y-2">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-bold">
                    TopUp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

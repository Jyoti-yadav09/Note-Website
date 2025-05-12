import React from "react";
import { Sparkles, Search, Share2 } from "lucide-react"; 

const FeaturePreview = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 text-center" id="features">
      <h2 className="text-4xl font-bold text-[#4B0082] mb-12">
        ✨ Features of <span className="text-[#FF69B4]">NotoChan</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-pink-200 transition duration-300">
          <Sparkles className="text-[#FF69B4] w-10 h-10 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">Organize Your Notes</h3>
          <p className="text-[#555]">
            Color-code and label your notes with love for quick and easy access.
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-pink-200 transition duration-300">
          <Search className="text-[#FF69B4] w-10 h-10 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">Search & Filter</h3>
          <p className="text-[#555]">
            Find your notes instantly using fast, smart filters.
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-pink-200 transition duration-300">
          <Share2 className="text-[#FF69B4] w-10 h-10 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#4B0082] mb-2">Share Notes</h3>
          <p className="text-[#555]">
            Share cute notes with your friends, study buddies, or just keep them private 🌸
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturePreview;

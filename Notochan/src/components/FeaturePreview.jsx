// src/components/FeaturePreview.js
import React from "react";

const FeaturePreview = () => {
  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Features of NotoChan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Organize Your Notes</h3>
          <p>Color-code and label your notes for quick access.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Search and Filter</h3>
          <p>Find your notes in seconds using powerful search filters.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Share Notes</h3>
          <p>Share your notes easily with friends and colleagues.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturePreview;

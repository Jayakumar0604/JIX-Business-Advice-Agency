import React from 'react';

const PageBack = ({ backgroundImage, title, content }) => {
  return (
    <div className="relative w-full h-130 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-blue-900/40" />

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="text-white max-w-xl">
          <h1 className="text-xl md:text-3xl lg:text-5xl montserrat-Bold mb-2">{title}</h1>
          <p className="text-sm md:text-base leading-snug">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default PageBack;
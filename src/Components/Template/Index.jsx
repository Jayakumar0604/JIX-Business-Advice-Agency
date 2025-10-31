import React from 'react';

const Template = ({ title, content, buttonText, imageSrc, reverse = false }) => {
  return (
    <section className="bg-[#f4f4f4] px-6 py-10 md:py-20">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 items-center ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Image Block */}
        <div className="w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded shadow-md"
          />
        </div>

        {/* Content Block */}
        <div className=" px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            {content}
          </p>
          {buttonText && (
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Template;
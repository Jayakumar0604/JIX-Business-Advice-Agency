import React from "react";

const TitleBox = ({ title, content }) => {
  return (
    <div className="w-full max-w-3xl text-center mx-auto px-4 py-10 bg-white  rounded-md">
      <h2 className="text-xl md:text-3xl lg:text-5xl montserrat-Medium text-gray-800 mb-3 ">{title}</h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed ">{content}</p>
    </div>
  );
};

export default TitleBox;

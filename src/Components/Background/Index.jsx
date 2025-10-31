import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Background = ({
  heading,
  description,
  backgroundImage,
  showLearnMore,
  showContactUs,
  learnMoreLink,
  contactUsLink,
}) => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-700/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 text-white flex flex-col items-center">
        <h1 className="text-[24px] md:text-[36px] lg:text-[48px] montserrat-Bold mb-4">
          {heading}
        </h1>
        <p className="max-w-2xl text-[14px] md:text-[16px] lg:text-[18px] mb-8">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
          {showLearnMore && (
            <Link
              to={learnMoreLink}
              className="bg-green-500 hover:bg-green-600 text-white montserrat-SemiBold px-6 py-3 rounded-md text-sm md:text-base"
            >
              Learn More
            </Link>
          )}
          {showContactUs && (
            <Link
              to={contactUsLink}
              className="bg-blue-500 hover:bg-blue-600 text-white montserrat-SemiBold px-6 py-3 rounded-md text-sm md:text-base"
            >
              Contact Us
            </Link>
          )}
        </div>

        {/* Down Arrow */}
        <div className="text-white text-3xl animate-bounce">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Background;
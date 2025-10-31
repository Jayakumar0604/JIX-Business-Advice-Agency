import React from "react";
import CityImage from "../../assets/Home-1.jpg";
import { Link } from "react-router-dom";

const HomeFirst = () => {
  return (
    <section className="w-full bg-[#f4f4f4] py-10 px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: City Street Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <div
            className="w-full h-full bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${CityImage})` }}
          >
            {/* Optional overlay */}
            <div className="w-full h-full bg-black/20 rounded-lg"></div>
          </div>
        </div>

        {/* Right: Text Overlay */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl montserrat-Bold text-[#253993] mb-4">
            Making an Impact Across the Globe
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Our business advice and technology solutions are designed to help
            you scale your vision and impact customers worldwide. JIx gives you
            the tools and strategy to compete and succeed in any global market,
            ensuring your business's influence knows no borders.
          </p>
          <Link to="/" className="bg-green-600 hover:bg-green-700 text-white  montserrat-semibold px-6 py-2 rounded transition duration-300">
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFirst;

import React from "react";
import Img from "../../assets/WalkBuild.jpg";
import { Link } from "react-router-dom";

const LandingFour = () => {
  return (
    <>
      <section className="bg-[#f4f4f4] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text Content */}
          <div className="md:p-6 lg:p-0">
            <h2 className="text-3xl md:text-4xl montserrat-Bold text-gray-900 mb-4">
              A Leader In The Industry
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              JIx sets the standard by delivering unparalleled expertise in
              financial strategy, secure business advice, and cutting-edge React
              development.
            </p>

            {/* Bullet Points */}
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 mb-6">
              <li>Over ten years as a trusted industry authority.</li>
              <li>Combines finance, strategy, and React tech seamlessly.</li>
              <li>Track record of driving sustainable client success.</li>
              <li>Constantly innovating to stay ahead of market trends.</li>
            </ul>

            {/* Button */}
            <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              READ MORE
            </Link>
          </div>

          {/* Right Side: Image */}
          <div>
            <img
              src={Img}
              alt="Bilding nearby walk"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingFour;

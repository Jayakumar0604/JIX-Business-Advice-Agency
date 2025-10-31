import React from "react";
import TitleBox from "../../Components/TitleBox/Index";
import Client1 from "../../assets/Land-1.jpg";
import Client2 from "../../assets/Land-2.jpg";
import Client3 from "../../assets/Land-3.jpg";
import { Link } from "react-router-dom";

const LandingThree = () => {
  return (
    <>
      <section className="py-10 bg-white">
        {/* Optional TitleBox */}
        <TitleBox
          title="Featured Case Studies"
          content="Explore our key successes. See how our integrated approach—combining financial strategy, expert advice, and advanced React development—solves complex challenges and delivers proven, measurable results for clients."
        />

        {/* Image Collage */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <img
              src={Client3}
              alt="Headphones"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src={Client2}
              alt="Succulents"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src={Client1}
              alt="Phone capturing lake"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Explore More Button */}
          <div className="text-center">
            <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingThree;

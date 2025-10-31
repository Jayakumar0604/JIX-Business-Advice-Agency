import React from "react";
import VideoPlayer from "../../Components/VideoPlayer/Index";
import { Link } from "react-router-dom";

const LandingTwo = () => {
  return (
    <>
      <section className="bg-[#f4f4f4] px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl montserrat-Bold text-gray-900 mb-4">
              Signature Process
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              We combine deep financial analysis and expert business strategy
              with agile, high-performance React development. This cohesive,
              iterative approach ensures your solution is not only well-planned
              but also flawlessly executed and delivered for sustainable,
              measurable growth.
            </p>
            <Link
              to="/"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              READ MORE
            </Link>
          </div>

          {/* Right Side: Video Player */}
          <div>
            <VideoPlayer youtubeUrl="https://www.youtube.com/embed/uDtEORB5nYw?si=RA8_cIpXYpFj6003" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTwo;

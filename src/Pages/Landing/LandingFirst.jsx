import React from "react";

const LandingFirst = () => {
  return (
    <>
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-6xl text-center mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl montserrat-Bold text-gray-900 mb-6">
            Global Leader 10 Years In a Row
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-sm lg:px-30 md:text-base leading-relaxed mb-10">
            For a decade, JIx has been recognized as a global leader in business
            strategy and innovative React solutions. Trust our proven expertise
            to secure your continued success worldwide.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className=" p-6 rounded-lg text-center ">
              <p className="text-3xl montserrat-Bold text-green-600">13.04%</p>
              <p className="text-sm text-gray-600 mt-2">
                Average profit per year
              </p>
            </div>
            <div className="p-6 rounded-lg text-center ">
              <p className="text-3xl montserrat-Bold text-green-600">17.23%</p>
              <p className="text-sm text-gray-600 mt-2">
                Average invest per year
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingFirst;

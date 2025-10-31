import React from "react";
import Client1 from "../../assets/Support.jpg";
import Client2 from "../../assets/Service.jpg";

const sections = [
  {
    imageAlt: "Unlimited Support & Updates",
    imageBg: Client1,
    title: "Unlimited Support & Updates",
    description:
      "Your peace of mind is our priority. Enjoy unlimited expert support and continuous React platform updates from JIx, ensuring your business always runs securely, efficiently, and with the latest technology.",
  },
  {
    imageAlt: "Go Pro for 24 Hour Service",
    imageBg: Client2,
    title: "Go Pro for 24 Hour Service",
    description:
      "Upgrade to our Pro tier for round-the-clock peace of mind. Get 24/7 priority access to our expert team for immediate technical support, critical financial guidance, and urgent React issue resolution.",
  },
];

const PriceFirst = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-5 md:space-y-16">
        {sections.map((section, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              } items-center gap-5 md:gap-8`}
            >
              {/* Image Block */}
              <div className="w-full md:w-1/2 min-h-[256px] flex items-center justify-center">
                <img
                  src={section.imageBg}
                  alt={section.imageAlt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 bg-[#E6F4FF] py-6 px-6 lg:py-20 rounded-lg shadow-md min-h-[256px] flex flex-col justify-center">
                <h2 className="text-2xl montserrat-Bold mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                  {section.description}
                </p>
                <button className="bg-green-500 text-white text-sm md:text-base font-semibold px-5 py-2 rounded hover:bg-green-600">
                  READ MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceFirst;

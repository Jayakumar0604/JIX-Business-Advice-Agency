import React from "react";
import { FaChartPie, FaRegLightbulb } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const ServiceComponents = () => {
  const services = [
    {
      icon: <FaRegLightbulb />,
      title: "Financial Advice",
      description:
        "Smart advice and clear strategies for business financial success.",
    },
    {
      icon: <FaChartPie />,
      title: "Investment Planning",
      description:
        "Build wealth smartly with strategic, long-term investment guidance you can trust.",
    },
    {
      icon: <MdLockOutline />,
      title: "Safe And Secure",
      description:
        "Your data and business are protected with our robust security measures.",
    },
  ];

  return (
    <div className="py-10 px-6 md:px-10 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3  lg:gap-8 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <div className="mb-4">
              <h1 className="text-4xl md:text-6xl text-[#4e5ed0]">
                {service.icon}
              </h1>
            </div>
            <h3 className="text-lg md:text-xl montserrat-SemiBold mb-2">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceComponents;

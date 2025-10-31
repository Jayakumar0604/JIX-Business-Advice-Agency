import React from "react";
import Client1 from "../../assets/client1.jpg";
import Client2 from "../../assets/client2.jpg";

const testimonials = [
  {
    name: "Janet Renolds",
    image: Client1,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Sara Blankenship",
    image: Client2,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Customers = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16  px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl montserrat-Medium text-center mb-12">
          400k+ Satisfied Customers
        </h2>
        <div className="place-items-center">
            <h1 className="bg-white w-20 h-0.5"></h1>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-white flex flex-col md:flex-row gap-5 items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div>
                <p className="text-sm mb-4">{testimonial.quote}</p>
                <p className="montserrat-SemiBold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="lg:mt-12 px-5 text-left">
          <button className="bg-green-500 text-white montserrat-SemiBold px-6 py-2 rounded hover:bg-green-600 text-sm">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;

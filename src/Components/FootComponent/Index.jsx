import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaGooglePlusG,
  FaRss,
} from "react-icons/fa";
import Back from "../../assets/Back.jpg";

const FootComponents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (!hasErrors) {
      // Submit logic here (e.g., API call)
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <div
        className=" bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-12 relative"
        style={{ backgroundImage: `url(${Back})` }}
      >
        {/* Main Card */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left: Reach Us */}
          <div className="bg-[#253993] text-sm md:text-base text-white p-8 flex flex-col justify-between">
            <div>
              <h2 className=" md:text-xl lg:text-2xl montserrat-SemiBold mb-6">
                Reach Us
              </h2>
              <p className="mb-2">13005 Greenville Avenue,</p>
              <p className="mb-2">California, TX 70240</p>
              <p className="mb-2">Phone: +1 234 567 7890</p>
              <p className="mb-2">Email: hello@digitalimegreen.com</p>
            </div>
            <div className="mt-6 flex space-x-4 text-xl">
              <a href="#" className="hover:text-[#DADEEF]">
                <FaFacebookSquare />
              </a>
              <a href="#" className="hover:text-[#DADEEF]">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#DADEEF]">
                <FaGooglePlusG />
              </a>
              <a href="#" className="hover:text-[#DADEEF]">
                <FaRss />
              </a>
            </div>
          </div>

          {/* Right: Leave A Message */}
          <div className="p-8">
            <h2 className="text-lg md:text-xl lg:text-2xl montserrat-SemiBold mb-6">
              Leave A Message
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-600">
              Please fill in the following fields:
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#253993]`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required.</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#253993]`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm md:text-base mt-1">
                    Email address is required.
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#253993]`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm md:text-base mt-1">
                    Message is required.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#28a745] text-white px-6 py-2 rounded hover:bg-[#218838] transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootComponents;

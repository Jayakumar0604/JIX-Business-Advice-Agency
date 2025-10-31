import React, { useState } from "react";

const Subscribe = ({ title, content }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      email: formData.email.trim() === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (!hasErrors) {
      console.log("Form submitted:", formData);
      // Reset form or show success message if needed
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#496cdced]  to-[#4c48e3f5] py-16 px-5 md:px-10">
      <div className="place-items-center">
        <div className="text-center place-items-center lg:w-200 space-y-5 py-5 text-white">
          <div className="bg-white w-20 h-1"></div>
          <h2 className="text-2xl md:text-3xl montserrat-Bold  mb-4">{title}</h2>
          <p className=" mb-6 text-sm md:text-base leading-relaxed">{content}</p>
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-[#253993]`}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-[#253993]`}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-[#253993]`}
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white montserrat-SemiBold px-6 py-2 rounded transition duration-300 w-full"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

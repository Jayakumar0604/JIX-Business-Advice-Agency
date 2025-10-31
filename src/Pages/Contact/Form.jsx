import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const { name, email, message } = formData;
    if (name && email && message) {
      console.log("Form submitted:", formData);
    }
  };

  const isEmpty = (field) => submitted && !formData[field];

  const emptyFields =
    submitted &&
    Object.entries(formData)
      .filter(([_, value]) => !value)
      .map(([key]) => {
        if (key === "name") return "Name";
        if (key === "email") return "Email Address";
        if (key === "message") return "Message";
        return key;
      });

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-4">
      {emptyFields && emptyFields.length > 0 && (
        <div className="bg-red-50 border border-red-300 p-4 rounded">
          <p className="text-red-700 font-semibold mb-2">
            Please, fill in the following fields:
          </p>
          <ul className="list-disc list-inside text-red-600">
            {emptyFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 border outline-none rounded ${
            isEmpty("name") ? "border-red-500" : "border-gray-300"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 border outline-none rounded ${
            isEmpty("email") ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className={`w-full p-3 border outline-none rounded h-32 resize-none ${
          isEmpty("message") ? "border-red-500" : "border-gray-300"
        }`}
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default Form;
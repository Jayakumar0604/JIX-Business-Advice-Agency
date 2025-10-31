import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-5xl" />,
    title: "Find Us",
    lines: [
      "Door No. 27B, Muthupattinam Street",
      "Pudukkottai, Tamil Nadu 622001",
    ],
  },
  {
    icon: <MdOutlinePhoneIphone className="text-blue-600 text-5xl" />,
    title: "Phone",
    lines: ["+91 1234567890", "+91 9876543210"], // original and reversed
  },
  {
    icon: <FaEnvelope className="text-blue-600 text-5xl" />,
    title: "Email",
    lines: ["jixcontact@digitalimgreen.com", "jixadmin@digitalimgreen.com"],
  },
];

const ContactFirst = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div>{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            {item.lines.map((line, i) => (
              <p key={i} className="text-sm text-gray-600">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFirst;

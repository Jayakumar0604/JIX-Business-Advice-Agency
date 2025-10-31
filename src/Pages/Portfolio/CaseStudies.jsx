import React from "react";
import Case1 from "../../assets/strategy.jpg"
import Case2 from "../../assets/Security.jpg"
import Case3 from "../../assets/Optimizing.jpg"
import Case4 from "../../assets/Financial.jpg"
import Case5 from "../../assets/Global.jpg"
import Case6 from "../../assets/UXUI.jpg"

const CaseStudies = () => {
  const caseStudiesData = [
    {
      image: Case1,
      title: "Scaling a Startup with Strategic Capital",
      content:
        "We helped Innovatech secure $2M in funding by refining their financial model and pitch deck. The result: 300% growth in their user base and a stable path to Series B.",
    },
    {
      image: Case2,
      title: "React Security Overhaul for E-Commerce",
      content:
        "A full security audit and React frontend rewrite for a major online retailer eliminated vulnerabilities. This project enhanced customer trust, reduced checkout errors, and boosted transaction volume by 15%.",
    },
    {
      image: Case3,
      title: "Optimizing Operations for Manufacturing",
      content:
        "By analyzing operational data, JIx identified key efficiency bottlenecks at Pro-Fab Corp. Implementing new, simplified workflows and a custom dashboard cut production time by 22% and reduced waste.",
    },
    {
      image: Case4,
      title: "Financial Turnaround for a Mid-Sized Firm",
      content:
        "Ascent Services faced cash flow issues. We developed a strict budget and debt reduction plan, leading to a profitable quarter within six months and securing their long-term financial stability.",
    },
    {
      image: Case5,
      title: "Global Market Entry Strategy for SaaS",
      content:
        "Ix crafted a targeted market entry and compliance strategy for CodeStream's expansion into three new continents. They successfully launched, acquiring over 50 new enterprise clients in the first year.",
    },
    {
      image: Case6,
      title: "Boosting UX/UI for Customer Retention",
      content:
        "A full UX/UI redesign of the DataFlow analytics platform, built with React, resulted in a 40% reduction in customer support tickets and increased average user session time by 25%.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {caseStudiesData.map((item, index) => (
        <div key={index} className="max-w-sm mx-auto">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-50 rounded-md"
          />
          <h3 className="mt-4 text-lg md:text-xl montserrat-SemiBold">{item.title}</h3>
          <p className="mt-2 text-sm md:text-base text-gray-600">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;

import React from "react";
import PageBack from "../../Components/PageBack/Index";
import Back from "../../assets/Portfolio.jpg";
import CaseStudies from "./CaseStudies";
import Subscribe from "../../Components/Subscribe/Index";
import FootComponents from "../../Components/FootComponent/Index";
import TitleBox from "../../Components/TitleBox/Index";

const PortFolio = () => {
  return (
    <>
      <PageBack
        backgroundImage={Back}
        title="Our Work"
        content="We deliver impactful solutions by combining expert business strategy, secure financial planning, and high-performance React development. See how we transform challenges into sustainable success stories for our clients."
      />
      <div className="py-5">
        <TitleBox
          title="Case Studies"
          content="Explore our proven track record of delivering impactful results. Read how JIx applied expert strategy, financial precision, and React technology to solve complex business challenges and drive client success."
        />
        <CaseStudies />
      </div>
      <Subscribe title="Get Notified When We Post New Work!" />
      <FootComponents/>
    </>
  );
};

export default PortFolio;

import React from "react";
import Back from "../../assets/Pricing.jpg";
import PageBack from "../../Components/PageBack/Index";
import Price from "../../Components/Price/Index";
import PriceFirst from "./PriceFirst";
import Customers from "../../Components/Customers/Index";
import TitleBox from "../../Components/TitleBox/Index";
import FootComponents from "../../Components/FootComponent/Index";
import PriceTwo from "./PriceTwo";

const Pricing = () => {
  return (
    <>
      <PageBack
        backgroundImage={Back}
        title="Join Today"
        content="Ready to transform your business? Partner with JIx for expert financial strategy, secure React development, and actionable advice. Start your journey to sustainable growth and global impact now!"
      />
      <Price />
      <PriceFirst />
      <Customers />
      <div className="py-5">
        <TitleBox
        title="Frequently Asked Questions"
        content="Get quick, expert answers to common questions about our business strategy, financial services, and cutting-edge React development to clarify how we power your growth."
      />
      <PriceTwo/>
      </div>
      <FootComponents/>
    </>
  );
};

export default Pricing;

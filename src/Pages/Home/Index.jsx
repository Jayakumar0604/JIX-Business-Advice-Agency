import React from "react";
import Back from "../../assets/Home.jpg";
import Background from "../../Components/Background/Index";
import ServiceComponents from "../../Components/ServiceComponent/Index";
import HomeFirst from "./HomeFirst";
import Subscribe from "../../Components/Subscribe/Index";
import FootComponents from "../../Components/FootComponent/Index";

const Home = () => {
  return (
    <>
      <Background
        heading="For Business"
        description="Unlock growth with JIx Business Advice. Get expert strategies, React-powered efficiency, and clear direction to solve your biggest business challenges and succeed."
        backgroundImage={Back}
        showLearnMore={true}
        learnMoreLink="/"
      />
      <ServiceComponents />
      <HomeFirst />
      <Subscribe
        title="Keep in Touch"
        content="Never miss an update! Subscribe to the JIx newsletter for the latest business insights, React tech news, and expert financial advice delivered straight to your inbox. Let's grow together."
      />
      <FootComponents/>        
    </>
  );
};

export default Home;

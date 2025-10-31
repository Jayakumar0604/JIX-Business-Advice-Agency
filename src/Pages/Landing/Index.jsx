import React from "react";
import Background from "../../Components/Background/Index";
import Back from "../../assets/Business.jpg";
import ServiceComponents from "../../Components/ServiceComponent/Index";
import Landing1 from "../../assets/Landing.jpg";
import Template from "../../Components/Template/Index";
import LandingFirst from "./LandingFirst";
import LandingTwo from "./LandingTwo";
import Subscribe from "../../Components/Subscribe/Index";
import LandingThree from "./LandingThree";
import LandingFour from "./LandingFour";
import TitleBox from "../../Components/TitleBox/Index";
import TeamSection from "../../Components/TeamSection/TeamSection";
import Customers from "../../Components/Customers/Index";
import Price from "../../Components/Price/Index";
import FootComponents from "../../Components/FootComponent/Index";

const Landing = () => {
  return (
    <>
      <Background
        heading="For Business"
        description="Unlock growth with JIx Business Advice. Get expert strategies, React-powered efficiency, and clear direction to solve your biggest business challenges and succeed."
        backgroundImage={Back}
        showLearnMore={true}
        showContactUs={true}
        learnMoreLink="/"
      />
      <div className="py-10">
        <section className="bg-white px-6 lg:px-30 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side: Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl montserrat-Medium text-gray-900 leading-tight">
                Building Successful Businesses Since 1985
              </h2>
            </div>

            {/* Right Side: Content */}
            <div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                For over three decades, we've helped entrepreneurs turn bold
                ideas into thriving ventures. Since 1985, our commitment to
                excellence, innovation, and long-term partnerships has empowered
                businesses across industries to grow with confidence. Whether
                you're launching a new brand or scaling an established
                enterprise, we bring the strategic insight and creative
                execution needed to build success that lasts.
              </p>
            </div>
          </div>
        </section>
        <ServiceComponents />
      </div>
      <Template
        title="Making an Impact Across the Globe"
        content="We design and deploy solutions that help your business scale its vision and reach customers worldwide. JIx gives you the tools to succeed in any global market."
        buttonText="READ MORE"
        imageSrc={Landing1}
      />
      <LandingFirst />
      <LandingTwo />
      <Subscribe
        title="The Right Choice"
        content="Choose JIx for expert financial strategy, secure React development, and proven business advice. We are the integrated partner you need to ensure lasting success and global impact."
      />
      <LandingThree />
      <LandingFour />
      <div className="py-10">
        <TitleBox
          title="Creative Team"
          content="Innovation drives us. Our React developers, designers, and strategy experts work as one to build powerful, beautiful, and user-friendly digital solutions that make your business stand out."
        />
        <TeamSection />
      </div>
      <Customers />
      <section className="py-10">
        <TitleBox
          title="Pricing"
          content="Flexible plans designed for every business size and growth stage. Choose from our Strategic, Pro (24/7), and Enterprise tiers to get the right blend of financial advice and React development support."
        />
        <Price />
      </section>
      <FootComponents />
    </>
  );
};

export default Landing;

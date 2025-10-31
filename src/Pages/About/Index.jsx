import React from "react";
import PageBack from "../../Components/PageBack/Index";
import Back from "../../assets/About.jpg";
import ServiceComponents from "../../Components/ServiceComponent/Index";
import VideoPlayer from "../../Components/VideoPlayer/Index";
import Subscribe from "../../Components/Subscribe/Index";
import FootComponents from "../../Components/FootComponent/Index";
import TitleBox from "../../Components/TitleBox/Index";
import TeamSection from "../../Components/TeamSection/TeamSection";

const About = () => {
  return (
    <>
      <PageBack
        backgroundImage={Back}
        title="About"
        content="We empower businesses with expert advice and cutting-edge React solutions. JIx combines deep strategy, financial wisdom, and modern technology to drive your sustainable growth and success."
      />
      <div className="py-5">
        <TitleBox
          title="Our Services"
          content="We offer Business Strategy, Financial Planning, and React Website Development. Get integrated, expert solutions designed to optimize your operations and ensure secure, sustainable growth."
        />
        <ServiceComponents />
      </div>
      <VideoPlayer youtubeUrl="https://www.youtube.com/embed/_0xcC7u7klM?si=dyzz5SNdNxC6lflO" />
      <div>
        <TitleBox
          title="Creative Team"
          content="Innovation drives us. Our React developers, designers, and strategy experts work as one to build powerful, beautiful, and user-friendly digital solutions that make your business stand out."
        />
        <TeamSection />
      </div>
      <Subscribe
        title="Stay Tuned. Sign Up for our Newsletter"
        content="Don't miss out on vital business strategy, financial insights, and cutting-edge React tech updates. Sign up for the JIx Newsletter now to get expert advice delivered straight to your inbox!"
      />
      <FootComponents/>
    </>
  );
};

export default About;

import React from "react";
import PageBack from "../../Components/PageBack/Index";
import Back from "../../assets/Contact-Back.jpg";
import TitleBox from "../../Components/TitleBox/Index";
import ContactFirst from "./ContactFirst";
import Form from "./Form";
import Map from "./Map";

const Contact = () => {
  return (
    <>
      <PageBack
        backgroundImage={Back}
        title="Let's Start a Project"
        content="Ready to transform your vision into reality? Contact JIx today. We're here to define your strategy, secure your financial future, and build your next high-performance React solution."
      />
      <section className="py-10">
        <TitleBox
          title="Reach Us"
          content="Ready to discuss your next strategic move? Contact the JIx team today for expert financial advice, advanced React development, or to discuss your unique business challenges."
        />
        <ContactFirst />
      </section>
      <section className="py-10 bg-[#F4F4F4]">
        <div className="w-full max-w-xl lg:max-w-3xl text-center mx-auto px-4 py-10  rounded-md">
          <h2 className="text-xl md:text-3xl lg:text-5xl montserrat-Medium text-gray-800 mb-3 ">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
            Ready to discuss your business strategy, financial goals, or a new
            React project? Reach out to the JIx experts today and let's start
            building your path to secure, sustainable success.
          </p>
        </div>
        <Form />
      </section>
      <Map />
    </>
  );
};

export default Contact;

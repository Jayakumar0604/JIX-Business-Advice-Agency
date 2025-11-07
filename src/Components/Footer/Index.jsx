import {
  FaFacebookSquare,
  FaTwitter,
  FaGooglePlusG,
  FaRss,
} from "react-icons/fa";
import Back from "../../assets/Back.jpg";

const Footer = () => {
  return (
    <>
      <div className="bottom-6 text-sm md:text-base bg-black py-5 flex flex-col md:flex-row justify-between px-10 text-[#666666] text-center w-full">
        <h1>Powered by JIX Business Advice</h1>
        <div className="mt-2 flex justify-center space-x-4  text-lg">
          <a href="#" className="hover:text-[#2ea3f2]">
            <FaFacebookSquare />
          </a>
          <a href="#" className="hover:text-[#2ea3f2]">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#2ea3f2]">
            <FaGooglePlusG />
          </a>
          <a href="#" className="hover:text-[#2ea3f2]">
            <FaRss />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

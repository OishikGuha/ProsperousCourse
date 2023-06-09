import React from "react";
import CTACard from "./CTACard";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:mt-0 mt-2" id="cta">
        <CTACard />
      </div>
      <div
        id="contacts"
        className="p-4 mt-10 bg-[#020202] m-4 rounded-lg flex flex-col items-center "
      >
        <h1 className="text-white mb-3">Made by Oishik Guha aka Roboticol</h1>
        <h1 className="text-white">Discord: Roboticol#4533</h1>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      <div className="mt-[-30vh] sm:mt-[-50vh] lg:mt-[-100vh] z-[-1]">
        <img
          src="/layerwaves.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import CTACard from "./CTACard";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:mt-0 mt-2" id="cta">
        <CTACard />
      </div>
      <div
        id="footerinfo"
        className="p-4 mt-10 bg-[#020202] m-4 rounded-lg flex flex-col items-center "
      >
        <h1 className="text-white mb-3">Made by Oishik Guha aka Roboticol</h1>
        <a
          href="https://twitter.com/roboticolyt?ref_src=twsrc%5Etfw"
          data-show-count="false"
          className=""
        >
          Follow @roboticolyt
        </a>
        <h1 className="text-white">Discord: Roboticol#4533</h1>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      <div className="mt-[-300vh] md:mt-[-110vh] z-[-1]">
        <img
          src="/layerwaves.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;

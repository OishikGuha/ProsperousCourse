import React from "react";
import CTACard from "./CTACard";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:mt-0 mt-2" id="cta">
        <CTACard />
      </div>
      <div className="mt-[-300vh] md:mt-[-100vh] z-[-1]">
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

import React from "react";

const CTACard = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col ">
      <div
        id="card"
        className="bg-[#020202] rounded-lg p-5 pr-15 pl-15 border-[#532a7b] border-2 shadow-lg shadow-[#532a7b]"
      >
        <div className="w-full " id="mainCTA">
          <img
            src="/logo.png"
            alt=""
            className="invert rounded-lg self-center"
          />
          <hr className="border-[#121212] border-[0.1vh] mt-2 rounded-lg" />
          <h1 className="text-white text-3xl">Prosperous course</h1>
          <ol className="text-white mt-4">
            <li>&middot; 13 Major Courses</li>
            <li>&middot; 37 Parts</li>
            <li>
              &middot; Affordable price of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-700">
                $19.99
              </span>
            </li>
            <li>&middot; Guaranteed Success</li>
            <li>&middot; Refundable</li>
          </ol>
          <div id="buy" className="w-full">
            <button className="p-3 bg-[#121212] w-full mt-3 rounded-full self-center border-[#532a7b] border-2 shadow-sm shadow-[#532a7b] hover:shadow-md hover:shadow-[#532a7b] transition-all">
              <a className="text-white" href="https://discord.gg/kAJkeNUUsG">
                Buy Now!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACard;

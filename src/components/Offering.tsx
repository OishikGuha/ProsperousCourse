import React from "react";
import Offer from "./Offer";
import Masonry from "react-masonry-css";
import data from "../../public/cInfo.json";

const Offering = () => {
  const courseParts = data;

  return (
    <div
      className="flex flex-col w-full align-middle items-center p-4 bg-[#010101] sm:rounded-lg rounded-none ml-0 sm:m-4"
      id="offers"
    >
      <h1 className="sm:text-3xl md:text-5xl text-lg mb-4 text-white text-center">
        What we offer:
      </h1>
      <div className="columns-1 sm:columns-4 m-0 sm:mt-4 gap-4 w-full inline-block mr-[4vh]">
        {courseParts.map((part, index) => (
          <Offer
            title={part.title}
            desc={part.desc}
            image={part.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Offering;

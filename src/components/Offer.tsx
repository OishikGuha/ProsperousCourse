import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Offer = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: any;
}) => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Tilt className="bg-[#121212] rounded-lg w-full inline-block p-4 m-4">
        <div className="rounded-lg">
          <img
            src={image}
            alt={`${title} image`}
            className="mb-2 h-[30vh] w-full object-contain"
          />
        </div>
        <h2 className="text-sm sm:text-2xl text-white">{title}</h2>
        <hr className="bg-[#020202] border-[#020202] mt-2 mb-2 h-1 rounded-full" />
        <p className="text-lg whitespace-break-spaces break-words text-white">
          {desc}
        </p>
      </Tilt>
    </motion.div>
  );
};

export default Offer;

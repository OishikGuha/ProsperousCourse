"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Intro = () => {
  return (
    <div className="flex flex-col w-full align-middle items-center p-4 mt-[5vh] py-4 ">
      <div
        className="flex flex-col w-full justify-center items-center"
        id="intro"
      >
        <img
          src="/cscatter.svg"
          alt=""
          className="absolute  translate-x-[-100vh]"
        />
        <img
          src="/cscatter.svg"
          alt=""
          className="absolute translate-x-[100vh] object-cover"
        />
        <img
          src="/blob.svg"
          alt=""
          // width="100"
          // height="100"
          className="absolute h-[82vh] translate-y-[-15vh]"
        />
        <Tilt>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            // transition={{ duration: 1 }}
          >
            <img
              src="/logo.png"
              alt="logo"
              // width={400}
              // height={400}
              className="rounded-[5vh] sm:rounded-[10vh] shadow-xl transition-all invert hover:shadow-2xl h-[25vh] sm:h-[40vh] mb-2"
            />
          </motion.div>
        </Tilt>
        <h1 className="sm:text-9xl text-5xl text-white z-1 relative">
          Success
        </h1>
        <h2 className="sm:text-4xl text-lg text-white z-1 relative">
          Everything you need.
        </h2>
        <h2 className="sm:text-4xl text-lg mt-10 text-white z-1">
          Introducing the prosperous course
        </h2>
        <a
          className="bg-[#020202] p-4 mt-4 rounded-full border-[#532a7b] border-2 transition-all hover:border-[#532a7b] hover:border-3"
          href="#buy"
        >
          <span className="text-white text-2xl">Buy Now</span>
        </a>
      </div>
    </div>
  );
};

export default Intro;

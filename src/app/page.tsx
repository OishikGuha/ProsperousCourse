"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import Offering from "../components/Offering";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Footer from "@/components/Footer";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <main className="h-screen flex w-full flex-col bg-[#121212] ">
      <NavBar />

      <Intro />
      <Offering />
      <Footer />
    </main>
  );
}

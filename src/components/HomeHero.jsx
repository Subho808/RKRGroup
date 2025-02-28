import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import rkrBg from "../assets/rkr-group-bg.png";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-dark-blue">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute top-0 left-0 brightness-90 saturate-100"
        src={rkrBg}
        alt="R.K.R Group Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b36] to-[#001b49] opacity-90"></div>

      {/* Content */}
      <div className="absolute text-center flex flex-col items-center justify-center px-6 md:px-20">
        <h1 className="text-7xl md:text-8xl font-bold text-red-500 drop-shadow-lg">
          R.K.R Group
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-white opacity-80 max-w-2xl">
          To be a trusted leader in renewable energy, civil construction, and
          plumbing solutions, driving sustainable development and enhancing
          communities through innovation and excellence.
        </p>

        {/* Button */}
        <Link to="/tours">
          <button className="mt-6 px-8 py-3 rounded-full font-semibold text-lg shadow-lg bg-white text-blue-900 transition duration-300 hover:bg-blue-500 hover:text-white">
            Our Services
          </button>
        </Link>
      </div>
    </div>
  );
}

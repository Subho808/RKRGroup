import React from "react";
import { Link } from "react-router-dom";

function AboutTeam() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:px-40 px-6 bg-gradient-to-br from-[#d5e4ea] via-zinc-100 to-zinc-200 py-16">
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/9/342717375/TL/SC/BG/140467629/office-building-construction.jpg"
          alt="Office Building Construction"
          className="w-full max-w-md rounded-lg"
        />
      </div>

      <div className="lg:w-1/2 text-left lg:pl-10 mt-6 lg:mt-0">
        <h1 className="text-lg font-semibold text-gray-800">
          RKR GROUP is 100% Indian owned and has years of experience in
          developing solar solutions, civil project management, innovation in
          renewable energy and helping the development of the local industries.
          We have the capability to manage any kind of system and installation
          and lead all our projects to fruition through the highest standards of
          performance and service quality.
        </h1>
        
      </div>
    </div>
  );
}

export default AboutTeam;
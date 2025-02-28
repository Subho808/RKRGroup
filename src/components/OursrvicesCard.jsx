import React from "react";
import { tripPackages } from "../sources/toursdata";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";

function OursrvicesCard() {
  return (
    <div className="w-screen lg:px-5 bg-[radial-gradient(ellipse_at_left_bottom,_var(--tw-gradient-stops))] from-[#d5e4ea] via-zinc-100 to-zinc-100">
      <div className="text-center lg:py-16 pt-8 lg:pt-10">
        <h1 className="font-black text-2xl text-zinc-700 tracking-tighter">
          Explore Our Exclusive Tour Packages
        </h1>
        <h2 className="font-semibold tracking-tight pt-2 text-zinc-700">
          Find your perfect getaway with unbeatable offers!
        </h2>
      </div>

      <div className="flex flex-row lg:flex-wrap lg:justify-center lg:items-center lg:px-10 lg:pb-20 overflow-x-scroll gap-10 px-12 py-16 lg:py-0">
        {tripPackages.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex flex-col justify-center items-center lg:w-80 h-auto py-4 px-5 cursor-pointer hover:scale-[1.02]"
          >
            <div className="relative lg:w-72 lg:h-48 w-60 h-60 rounded p-3 lg:p-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={trip.pic}
                alt={trip.title}
              />
            </div>

            <div className="flex flex-col w-full gap-2 px-5 py-3 text-center text-sm">
              <div className="flex flex-row justify-between w-full">
                <h1 className="font-black text-[#4f8095] tracking-[-0.5px] lg:text-lg text-base">
                  {trip.title}
                </h1>
                
              </div>

              <h3 className="text-sm font-bold tracking-tight text-zinc-600">
                {trip.destinations}
              </h3>

              <ul className="list-disc text-left text-sm text-zinc-600 pl-5">
                <li>
                  {/* <MdDateRange className="inline text-lg text-zinc-500 mr-1" /> */}
                  {trip.desc1}
                </li>
                <li>
                  {/* <IoTime className="inline text-lg text-zinc-500 mr-1" /> */}
                  {trip.desc2}
                </li>
                <li>
                  {/* <BiSolidPlaneAlt className="inline text-lg text-zinc-500 mr-1" /> */}
                  {trip.desc3}
                </li>
                <li className="">
                {trip.desc4}
                </li>
                <li className="">
                {trip.desc5}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OursrvicesCard;

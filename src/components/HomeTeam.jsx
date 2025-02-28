import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { TbUserQuestion } from "react-icons/tb";

function HeroAbout() {
  return (
    <div className="w-screen bg-white">
      <div className="flex flex-col lg:justify-center lg:items-center justify-start">
        <div className="flex flex-col py-8 lg:py-0  lg:px-32 text-center">
          <h1 className="py-10 tracking-tighter font-semibold text-xs lg:text-sm text-zinc-600 lg:hidden block">
            RKR Group
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:py-10">
            <h1 className="lg:text-2xl text-md px-10 lg:px-0 font-bold tracking-tight text-zinc-600 lg:hidden">
              RKR GROUP specializes in renewable energy, civil construction, and
              plumbing services, delivering innovative and sustainable solutions
              for residential, commercial, and industrial projects. Committed to
              quality, efficiency, and environmental responsibility, we support
              modern infrastructure and green energy initiatives.
            </h1>

            <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVNRVVxWgliDG20Yl9g1ZZEoaC1_FAXgeaw&s"
  className="saturate-0 w-80 lg:w-1/2 my-8 rounded-lg aspect-auto object-cover mx-10"
  alt=""
/>


            <div className="lg:flex hidden flex-col gap-10 items-center">
              <h1 className=" tracking-tighter font-semibold text-xs lg:text-sm text-zinc-600 lg:block hidden">
                RKR Group
              </h1>

              <h1 className="lg:text-xl text-md px-10 font-bold tracking-tight text-zinc-600 text-center">
              RKR GROUP specializes in renewable energy, civil construction, and
              plumbing services, delivering innovative and sustainable solutions
              for residential, commercial, and industrial projects. Committed to
              quality, efficiency, and environmental responsibility, we support
              modern infrastructure and green energy initiatives.
              </h1>

              <Link to="/about">
                <button className="hidden lg:block px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
                  About Us
                </button>
              </Link>
            </div>

            <Link to="/about">
              <button className="px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black lg:hidden">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;

import React from "react";
import { Link } from "react-router-dom";
import FutureBusinessBg from "../assets/FutureBusiness.png";
function HomeFutureBusiness() {
  return (
    <div className="w-screen bg-white">
      <div className="flex flex-col lg:justify-center lg:items-center justify-start">
        <div className="flex flex-col py-8 lg:py-0 lg:px-32 text-center">
          {/* Mobile View Title */}
          <h1 className="py-10 tracking-tighter font-semibold text-lg lg:text-xl text-zinc-600 lg:hidden block">
            Future Business
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:py-10">
            {/* Description - Mobile View */}
            <h1 className="lg:text-3xl text-lg px-10 lg:px-0 font-bold tracking-tight text-zinc-600 lg:hidden">
              Our Future Business focuses on <strong>biogas production, waste-to-energy solutions,</strong> 
              and <strong>advanced storage & distribution systems.</strong>  
              We aim to <strong>revolutionize renewable energy</strong> and <strong>support green energy initiatives</strong> 
              with innovative and sustainable solutions.
            </h1>

            {/* Image */}
            <img
              src={FutureBusinessBg}
              className="saturate-0 w-80 lg:w-1/2 my-8 rounded-lg aspect-auto object-cover mx-10"
              alt="Future Business"
            />

            {/* Desktop View Content */}
            <div className="lg:flex hidden flex-col gap-10 items-center">
              <h1 className="tracking-tighter font-semibold text-lg lg:text-2xl text-zinc-600 lg:block hidden">
                Future Business
              </h1>

              <h1 className="lg:text-2xl text-lg px-10 font-bold tracking-tight text-zinc-600 text-center">
                Our Future Business focuses on <strong>biogas production, waste-to-energy solutions,</strong> 
                and <strong>advanced storage & distribution systems.</strong>  
                We aim to <strong>revolutionize renewable energy</strong> and <strong>support green energy initiatives</strong> 
                with innovative and sustainable solutions.
              </h1>

              <Link to="/FutureBusiness">
                <button className="hidden lg:block px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Mobile View Button */}
            <Link to="/FutureBusiness">
              <button className="px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black lg:hidden">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFutureBusiness;
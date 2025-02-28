import React from "react";
import { servicesData } from "../sources/toursdata";
import { Link } from "react-router-dom";
import OurServicesBg from "../assets/OurServices.png";
function OurService() {
  return (
    <div className="w-screen bg-zinc-100">
      <div className="flex lg:flex-row flex-col pt-28 px-10">
        <div className="lg:basis-1/2 flex flex-col justify-center items-center">
          <div className="text-center py-8">
            <h1 className="font-black text-xl text-zinc-700 tracking-tighter">OUR SERVICES</h1>
          </div>

          <div className="flex flex-row flex-wrap justify-center lg:gap-8 gap-5 py-6 text-sm lg:text-base overflow-x-scroll">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-row items-start bg-white shadow-md rounded-2xl p-5 gap-4 lg:w-[350px] w-80 hover:scale-[1.02]">
                <div className="bg-[#406D83] shadow-lg text-white p-3 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h1 className="font-bold tracking-tight text-lg text-[#406D83] pb-2">{service.name}</h1>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/tours"> 
            <button className="px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="lg:basis-1/2 p-5 hidden lg:block">
          <img src={OurServicesBg} className="rounded-3xl object-cover object-top lg:h-full lg:w-full shadow-inner" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurService;

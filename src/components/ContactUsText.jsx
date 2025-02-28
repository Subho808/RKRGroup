import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { TbUserQuestion } from "react-icons/tb";

function ContactUsText() {
  return (
    <div className="w-screen bg-white">
      <div className="flex flex-col lg:justify-center lg:items-center justify-start">
        <div className="flex flex-col py-8 lg:py-0  lg:px-32 text-center">
          

          <div className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:py-10">
            <h1 className="lg:text-2xl text-md px-10 lg:px-0 font-bold tracking-tight text-zinc-600 lg:hidden">
            Let RKR GROUP be your trusted partner in renewable energy, civil construction, and plumbing solutions.
            Contact us today to discuss how we can assist you in building a sustainable future! 
            </h1>

 


            <div className="lg:flex hidden flex-col gap-10 items-center">
             

              <h1 className="lg:text-xl text-md px-10 font-bold tracking-tight text-zinc-600 text-center">
              Let RKR GROUP be your trusted partner in renewable energy, civil construction, and plumbing solutions. 
              Contact us today to discuss how we can assist you in building a sustainable future!
              </h1>

            
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsText;

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok, FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Xlogo from "../assets/X Logo.png"

function Footer() {
  return (
    <>
    <div className="bg-zinc-800 flex flex-row lg:gap-20 gap-5 lg:px-20 px-8 lg:py-10 py-4 border-t">

      {/* INFO COMPANY */}

      <div className="text-white">
        
        {/* <img src="https://i.ibb.co/tBRzmFZ/WANDERWAVE.png" className="w-14 py-5" alt="" /> */}

        <div className="text-sm">
          <h1 className="font-bold text-base">R.K.R Group</h1>
          <h1>163-C,DDA FLATS,SHAHPUR JAT</h1>
          <h1>NEW DELHI- 110049</h1>

          <div className="flex flex-row items-center gap-3 pt-3">
            <span><IoIosMail /> </span>
            <span>www.corporate@grouprkr.co.in/</span>
            </div>
          <div className="flex gap-3">
            <span><FaPhoneAlt /> </span>
            <span>+91-7601955124</span>
            </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 py-6 lg:pl-0 text-white">

        <p className="font-bold text-sm lg:text-base">Follow Us</p>
        <div className="flex flex-row flex-wrap text-white gap-4 text-xs lg:text-sm">
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaInstagram />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaTiktok />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaYoutube />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaFacebookF />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaXTwitter />
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm lg:text-sm">
          <p className=" cursor-pointer hover:text-[#406D83]">
            Terms & Condition
          </p>
          <p className=" cursor-pointer hover:text-[#406D83]">Privacy Notice</p>
          <p className=" cursor-pointer hover:text-[#406D83]">Blog</p>
        </div>
      </div> */}

      <div className="flex-col gap-4  lg:pl-0 text-white hidden lg:flex">
        
        <p className="font-bold text-sm lg:text-base">Company</p>

        <div className="flex flex-col gap-2 text-sm lg:text-sm">
          <a href="/" className="cursor-pointer hover:text-[#406D83]">
            Home
          </a>
          <a href="/whyUs" className=" cursor-pointer hover:text-[#406D83]">Why us?</a>
          <a href="/OurServices" className=" cursor-pointer hover:text-[#406D83]">Our Services</a>
          <a href="/FutureBusiness" className=" cursor-pointer hover:text-[#406D83]">Future Business</a>
          <a href="/messageUs" className=" cursor-pointer hover:text-[#406D83]">Contact Us</a>
          <a href="/career" className=" cursor-pointer hover:text-[#406D83]">Career</a>
        </div>
      </div>


   
    </div>

    <div className="grid grid-cols-2 gap-4">
  <div className="text-xs lg:text-sm py-4 px-8 justify-self-start">
    <p>
      Copyright © 2025
      <span className="font-semibold"> R.K.R Group.</span> All rights
      reserved.
    </p>
  </div>

  <div className="text-xs lg:text-sm py-4 px-8 justify-self-end flex items-center gap-2">
  <p className="flex items-center">
    Designed & Developed by
    <img
      src={Xlogo}       // Replace with your logo image path or URL
      alt="MSR devXpert Logo"
      className="h-5 w-auto ml-1"
    />
    <span className="font-semibold ml-1"><a href="https://www.msrdevxpert.com">MSR devXpert.</a></span>
  </p>
</div>

</div>

    </>
  );
}

export default Footer;

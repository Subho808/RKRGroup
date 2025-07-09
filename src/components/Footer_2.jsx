import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Xlogo from "../assets/X Logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-zinc-900 text-white pt-10 px-6 lg:px-20">
        {/* Main Sections */}
        <div className="flex flex-col lg:flex-row  items-center lg:items-start gap-10 text-center lg:text-left">
          
          {/* Company Info */}
          <div className="space-y-3">
            <h1 className="text-lg font-bold">R.K.R Group</h1>
            <p>163-C, DDA FLATS, SHAHPUR JAT</p>
            <p>NEW DELHI - 110049</p>

            <div className="flex justify-center lg:justify-start items-center gap-2">
              <IoIosMail className="text-xl" />
              <span className="text-sm break-all">corporate@grouprkr.co.in</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <span className="text-sm">+91-7601955124</span>
            </div>
          </div>

          {/* Company Links */}
         {/* Company Links */}
<div className="lg:pl-[20rem]">
  <h2 className="text-lg font-bold mb-3">Company</h2>
  <ul className="space-y-2 text-sm">
    <li><a href="/" className="hover:text-[#86aebf]">Home</a></li>
    <li><a href="/whyUs" className="hover:text-[#86aebf]">Why us?</a></li>
    <li><a href="/OurServices" className="hover:text-[#86aebf]">Our Services</a></li>
    <li><a href="/FutureBusiness" className="hover:text-[#86aebf]">Future Business</a></li>
    <li><a href="/messageUs" className="hover:text-[#86aebf]">Contact Us</a></li>
    <li><a href="/career" className="hover:text-[#86aebf]">Career</a></li>
  </ul>
</div>


          {/* Social Media */}
          {/* <div>
            <h2 className="text-lg font-bold mb-3">Follow Us</h2>
            <div className="flex justify-center gap-4 text-xl">
              <a href="#" className="hover:text-[#86aebf]"><FaInstagram /></a>
              <a href="#" className="hover:text-[#86aebf]"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#86aebf]"><FaYoutube /></a>
              <a href="#" className="hover:text-[#86aebf]"><FaTiktok /></a>
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs lg:text-sm pb-6 text-center">
          <p>
            © 2025 <span className="font-semibold">R.K.R Group</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2 mt-2 lg:mt-0">
            <p>Designed & Developed by</p>
            <img src={Xlogo} alt="MSR devXpert Logo" className="h-5 w-auto" />
            <a
              href="https://www.msrdevxpert.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:text-[#86aebf]"
            >
              MSR devXpert
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

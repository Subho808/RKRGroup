import React, { useState, useEffect } from "react";
import rkrGrp from "../assets/orange rkrgroup.png";

import "../index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-center py-4 px-8 fixed z-50 w-screen transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b bg-blue-950 to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div>
          {/* LOGO */}
          <a href="/">
            <img src={rkrGrp} className="h-12" alt="logo" />
          </a>
        </div>

        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-semibold">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/" onClick={() => setIsNavOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/whyUs" onClick={() => setIsNavOpen(false)}>
                    Why us?
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/OurServices" onClick={() => setIsNavOpen(false)}>
                    Our Services
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link
                    to="/FutureBusiness"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Future Business
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link
                    to="/messageUs"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link
                    to="/career"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-12 font-semibold lg:flex">
  <li>
    <Link
      to="/"
      className="text-amber-500 transition-all duration-300 hover:text-green-500 hover:underline hover:font-bold"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="text-amber-500 transition-all duration-300 hover:text-green-500 hover:underline hover:font-bold"
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to="/OurServices"
      className="text-amber-500 transition-all duration-300 hover:text-green-500 hover:underline hover:font-bold"
    >
      Our Services
    </Link>
  </li>
  <li>
    <Link
      to="/FutureBusiness"
      className="text-amber-500 transition-all duration-300 hover:text-green-500 hover:underline hover:font-bold"
    >
      Future Business
    </Link>
  </li>
  <li>
    <Link
      to="/messageUs"
      className="text-amber-500 transition-all duration-300 hover:text-green-500 hover:underline hover:font-bold"
    >
      Contact Us
    </Link>
  </li>
  <li>
    <Link
      to="/career"
      className="text-amber-500 transition-all duration-300 hover:text-green-500 hover:underline hover:font-bold"
    >
      Career
    </Link>
  </li>
</ul>

        </nav>
      </div>

      <style>
        {`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}

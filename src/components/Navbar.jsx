import React from "react";
import logo from "../assets/logo-vercel.png"

export default function Navbar({ scrolled, activeSection, onNavClick }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#20272f]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-10 " />
            <span className="text-xl font-semibold tracking-tight">
              Portfolio
            </span>
          </div>

          <div className="hidden md:flex space-x-1">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => onNavClick(item.toLowerCase())}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "bg-[#00bd95] text-white"
                    : "text-gray-300 hover:text-[#00bd95] hover:bg-[#20272f]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden text-[#00bd95]" aria-label="Open menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-vercel.png";

export default function Navbar({ scrolled, activeSection, onNavClick }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // tutup menu saat resize ke desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false); // md breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // tutup menu saat klik di luar panel
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const items = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleItemClick = (id) => {
    onNavClick(id);
    setOpen(false);
  };

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
          {/* Left brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="HB Logo" className="w-9 h-9" />
            <span className="text-xl font-semibold tracking-tight text-white">
              Portfolio
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1">
            {items.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleItemClick(id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? "bg-[#00bd95] text-white"
                      : "text-gray-300 hover:text-[#00bd95] hover:bg-[#20272f]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-[#00bd95] p-2 rounded-lg hover:bg-[#20272f]/60 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              // X icon
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // hamburger
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
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 mt-3" : "max-h-0"
          }`}
        >
          <div
            ref={panelRef}
            className="bg-[#20272f]/95 backdrop-blur-sm border border-[#00bd95]/15 rounded-2xl p-3 shadow-xl"
          >
            {items.map((item) => {
              const id = item.toLowerCase();
              const active = activeSection === id;

              return (
                <button
                  key={item}
                  onClick={() => handleItemClick(id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-[#00bd95] text-white"
                      : "text-gray-200 hover:bg-[#171c22]/60 hover:text-[#00bd95]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Github, Linkedin, ChevronDown, Mail, FileMinus, Instagram } from "lucide-react";
import heroPoster from "../assets/Hero-Poster3.png";
import TextType from "./TextType";

export default function Hero({ onScrollTo }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background dengan gradient halus */}
      <div className="absolute inset-0 bg-gradient-to-br z-1 from-[#1a1f26] via-[#171c22] to-[#00a27f44] pointer-events-none" />

      <div className="absolute inset-0 opacity-5 z-1 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bd95' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* KIRI */}
          <div className="space-y-6 mr-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-gray-500 text-lg tracking-widest uppercase font-light">
                Hello, My name is 👋
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hikam
                <span className="animate-charcter sm:ml-5 md:ml-5"> Baidawih</span>
              </h1>
            </div>

            <div className="space-y-2 border-l-2 border-[#00bd95] pl-6">
              <p className="text-white text-lg font-medium">
                Mechatronics and Artificial Intelligence Student
                <br />
                at Indonesia University of Education
              </p>
              <p className="text-gray-400 text-base">
                <TextType
                  text={[
                    "Data Analyst • Machine Learning • Software Engineer Enthusiast",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </p>
            </div>

            <div className="flex gap-9 pt-4">
              <a href="https://wa.me/6282122128895">
                <button className="flex items-center gap-2 px-4 md:px-8 py-3 bg-[#02a683] hover:bg-[#02c69e] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span>Whatsapp Me</span>
                  <Mail size={20} />
                </button>
              </a>
              <a href="https://drive.usercontent.google.com/download?id=17WZRPh1A4JUtl0yCz305eg4U-a5HKAXq&export=download&authuser=1&confirm=t&uuid=ee1efae5-8cef-4ecd-95ed-ca71848bc03a&at=ANTm3cxt2jqSaikpAC8P_oPJ30yQ:1766507346378">
                <button className="flex items-center gap-2 px-4 md:px-8 py-3 border-2 border-[#00bd95] bg-[#161b22] hover:bg-[#02c69e] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span>Curriculum Vitae</span>
                  <FileMinus size={20} />
                </button>
              </a>
            </div>
          </div>

          {/* KANAN: GAMBAR - Clean Professional Style */}
          <div className="relative hidden md:block ml-18">
            {/* Soft shadow backdrop */}
            <div className="w-[500px] h-[480px] absolute -inset-4 bg-gradient-to-br from-[#00bd95]/10 to-transparent rounded-3xl" />

            {/* Main image container */}
            <div className="relative w-[450px] h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#20272f] to-[#1a1f26] border border-gray-800/50 shadow-2xl">
              <img
                src={heroPoster}
                alt="Hero Poster"
                className="w-fit h-fit object-cover grayscale-[25%]"
                loading="lazy"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171c22]/60 via-transparent to-transparent" />

              {/* Clean accent borders */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00bd95]/60" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00bd95]/60" />
            </div>

            {/* Floating stats cards (optional decorative elements) */}
            <div className="absolute -left-6 top-1/4 bg-[#20272f] border border-gray-800/50 rounded-xl p-4 shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#00bd95]">3.66</p>
              <p className="text-xs text-gray-400">GPA</p>
            </div>
            <div className="absolute -right-2 bottom-1/3 bg-[#20272f] border border-gray-800/50 rounded-xl p-4 shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#00bd95]">4+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onScrollTo("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
      >
        <ChevronDown size={32} className="text-[#00bd95] mx-auto" />
        scroll down
      </button>
    </section>
  );
}

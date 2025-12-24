import React from "react";
import aboutPic from "../assets/Hero-Image.jpeg";
import { GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171c22] to-[#20272f]" />
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-[#00bd95]/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-[#00bd95]/10 blur-3xl rounded-full" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        {/* title */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 sm:w-16 bg-[#00bd95]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              About <span className="text-[#00bd95]">Me</span>
            </h2>
            <div className="h-px w-10 sm:w-16 bg-[#00bd95]" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Get to know more about my background, education, and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start lg:items-center">
          {/* LEFT */}
          <div className="relative">
            <div className="relative rounded-3xl border border-[#00bd95]/20 bg-[#20272f]/70 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00bd95] to-transparent opacity-60" />

              <div className="p-5 sm:p-6 md:p-8">
                {/* header: stack di mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    This is <span className="text-[#00bd95]">me</span>
                  </h3>
                  <span className="text-xs text-gray-400 border border-gray-700/60 px-3 py-1 rounded-full w-fit">
                    Available for collaboration
                  </span>
                </div>

                {/* image frame */}
                <div className="relative">
                  <div className="absolute -inset-6 bg-[#00bd95]/10 blur-3xl rounded-[2rem]" />

                  {/* ukuran responsif */}
                  <div
                    className="relative mx-auto overflow-hidden border border-gray-800/60 rounded-full
                                  w-[240px] h-[240px]
                                  sm:w-[320px] sm:h-[320px]
                                  md:w-[370px] md:h-[370px]"
                  >
                    <img
                      src={aboutPic}
                      alt="About profile"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171c22]/65 via-transparent to-transparent" />
                  </div>

                  {/* badge: aman di mobile (tidak keluar layar) */}
                  <div className="absolute right-3 bottom-3 sm:-right-4 sm:bottom-8 bg-[#20272f]/85 border border-gray-800/60 rounded-xl px-4 py-3 shadow-lg backdrop-blur">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <GraduationCap size={16} className="text-[#00bd95]" />
                      Major
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Mechatronics & AI
                    </p>
                  </div>
                </div>

                {/* quick info row */}
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gray-800/60 bg-[#171c22]/40 p-4">
                    <p className="text-xs text-gray-400 mb-1 flex items-center gap-2">
                      <MapPin size={14} className="text-[#00bd95]" />
                      Based in
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Indonesia
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-800/60 bg-[#171c22]/40 p-4">
                    <p className="text-xs text-gray-400 mb-1">Focus</p>
                    <p className="text-sm font-semibold text-white">
                      Data & Software Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5 md:space-y-6">
            <div className="bg-[#20272f]/70 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-2xl border border-[#00bd95]/20 shadow-xl hover:border-[#00bd95]/40 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00bd95] mb-4">
                Summary
              </h3>
              <p className="text-gray-300 text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-left sm:text-justify">
                I am an undergraduate student in Mechatronics and Artificial
                Intelligence with high motivation, strong analytical skills, and
                solid problem-solving abilities. I have experience in data
                cleaning, exploratory data analysis (EDA), and developing
                data-driven insights to support business decision-making. I am
                also highly interested in software development, with proficiency
                in technologies such as Tailwind CSS, React.js, and Express.js.
                In addition, I have leadership experience and strong
                communication skills, enabling me to collaborate effectively
                with diverse teams and stakeholders.
              </p>
            </div>

            <div className="bg-[#20272f]/70 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-2xl border border-[#00bd95]/20 shadow-xl hover:border-[#00bd95]/40 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00bd95] mb-4">
                Education
              </h3>

              <div className="space-y-2">
                <p className="text-[17px] sm:text-[19px] font-semibold text-white">
                  Indonesia University of Education
                </p>
                <p className="text-gray-400 text-[14px] sm:text-[15px]">
                  Bachelor of Engineering – Mechatronics and Artificial
                  Intelligence
                </p>
                <p className="text-[#00bd95] font-semibold text-[14px] sm:text-[15px]">
                  GPA: 3.66/4.00
                </p>
                <p className="text-gray-500 text-sm">August 2023 – Present</p>
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
}

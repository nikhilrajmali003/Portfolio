import React from "react";
import pic from "../../public/photo.avif";
import {
  FaSquareFacebook,
  FaTelegram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-20 space-y-4 order-2 md:order-1 text-center md:text-left">
            <span className="text-lg text-[#38BDF8]">
              👋 Welcome To My Feed
            </span>

            {/* Animated Developer Text */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start text-2xl sm:text-3xl md:text-4xl font-semibold">
              <h1>Hello, I'm a&nbsp;</h1> {/* Non-breaking space */}
              <ReactTyped
                className="text-orange-500 font-bold"
                strings={["Developer 💻", "Programmer 🖥️", "Coder 🚀"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm sm:text-md md:text-lg text-gray-300 mt-4 leading-relaxed">
              I'm{" "}
              <span className="font-bold text-[#38BDF8]">Nikhil Raj Mali</span>,
              a final year Computer Science student at Techno India NJR.
              Passionate about Java, Web Technologies, and building scalable
              applications. Always eager to learn and innovate! 💡✨
            </p>

            {/* Social Media & Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between mt-6 space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="space-y-2">
                <h1 className="font-bold text-[#38BDF8] text-lg sm:text-xl">
                  📌 Available on
                </h1>
                <ul className="flex space-x-4 text-lg sm:text-xl">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-gray-400 hover:text-[#1877F2] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-gray-400 hover:text-[#0077B5] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-gray-400 hover:text-[#0088CC] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h1 className="font-bold text-[#38BDF8] text-lg sm:text-xl">
                  🛠️ Currently working on
                </h1>
                <div className="flex space-x-4 sm:space-x-6 text-2xl sm:text-3xl">
                  <SiMongodb className="text-gray-400 hover:text-[#47A248] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                  <SiExpress className="text-gray-400 hover:text-[#828282] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                  <FaReact className="text-gray-400 hover:text-[#61DAFB] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                  <FaNodeJs className="text-gray-400 hover:text-[#3C873A] transition duration-300 cursor-pointer scale-100 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image (Fully Responsive) */}
          <div className="md:w-1/2 order-1">
            <div className="flex items-center justify-center">
              <img
                src={pic}
                className="rounded-full border-4 border-[#38BDF8] shadow-xl 
                w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]
                transition-transform duration-300 hover:scale-105"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />
    </>
  );
}

export default Home;

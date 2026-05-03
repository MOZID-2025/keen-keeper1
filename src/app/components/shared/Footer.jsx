import React from "react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#1a4332] text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          KeenKeeper
        </h2>
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-16">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="bg-white p-3 rounded-full text-[#1a4332] hover:bg-gray-200 transition-colors"
            >
              <GrInstagram />
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-full text-[#1a4332] hover:bg-gray-200 transition-colors"
            >
              <BsFacebook />
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-full text-[#1a4332] hover:bg-gray-200 transition-colors"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

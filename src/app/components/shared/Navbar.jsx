"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "../../../assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Image src={logoImg} alt="Logo" />

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`${
              pathName === "/"
                ? "bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
                : ""
            }`}
          >
            <button className="cursor-pointer">
              <span>🏠 </span>
              Home
            </button>
          </Link>

          <Link
            href="/timeline"
            className={`${
              pathName === "/timeline"
                ? "bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
                : ""
            }`}
          >
            <button className="flex items-center gap-1  hover:text-black cursor-pointer">
              <span>🕒 </span>
              Timeline
            </button>
          </Link>

          <Link
            href="/stats"
            className={`${
              pathName === "/stats"
                ? "bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
                : ""
            }`}
          >
            <button className="flex items-center gap-1 hover:text-black cursor-pointer">
              <span>📊 </span>
              Stats
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

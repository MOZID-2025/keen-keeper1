"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "../../../assets/logo.png";
import { usePathname } from "next/navigation";
import { ChartNoAxesCombined, History, House } from "lucide-react";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between">
        <Image src={logoImg} alt="Logo" />

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`${
              pathName === "/"
                ? "bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
                : ""
            }`}
          >
            <button className="cursor-pointer flex items-center">
              <span className="mr-2">
                <House className="w-5 h-5" />
              </span>
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
            <button className="flex items-center gap-1   cursor-pointer">
              <span>
                <History />
              </span>
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
            <button className="flex items-center gap-1 cursor-pointer">
              <span>
                <ChartNoAxesCombined />
              </span>
              Stats
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

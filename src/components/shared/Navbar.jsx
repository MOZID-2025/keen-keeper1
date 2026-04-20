import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-semibold text-gray-800">
          Keen<span className="text-green-600">Keeper</span>
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/">
            <button className="bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2">
              <span>🏠</span>
              Home
            </button>
          </Link>

          <Link href="/timeline">
            <div className="flex items-center gap-1 text-gray-600 hover:text-black cursor-pointer">
              <span>🕒</span>
              Timeline
            </div>
          </Link>

          <Link href="/stats">
            <div className="flex items-center gap-1 text-gray-600 hover:text-black cursor-pointer">
              <span>📊</span>
              Stats
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

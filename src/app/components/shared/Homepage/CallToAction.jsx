import React from "react";

const CallToAction = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded-md text-sm font-medium">
            + Add a Friend
          </button>
        </div>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm py-6">
            <h3 className="text-2xl font-semibold text-gray-800">10</h3>
            <p className="text-gray-500 text-sm mt-1">Total Friends</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm py-6">
            <h3 className="text-2xl font-semibold text-gray-800">3</h3>
            <p className="text-gray-500 text-sm mt-1">On Track</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm py-6">
            <h3 className="text-2xl font-semibold text-gray-800">6</h3>
            <p className="text-gray-500 text-sm mt-1">Need Attention</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm py-6">
            <h3 className="text-2xl font-semibold text-gray-800">12</h3>
            <p className="text-gray-500 text-sm mt-1">
              Interactions This Month
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default CallToAction;

"use client";

import React, { useEffect, useState } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";

const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <Phone className="text-white" size={16} />;
      case "Text":
        return <MessageSquare className="text-white" size={16} />;
      case "Video":
        return <Video className="text-white" size={16} />;
      default:
        return null;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "Call":
        return "bg-emerald-500";
      case "Text":
        return "bg-blue-500";
      case "Video":
        return "bg-purple-500";
      default:
        return "bg-gray-400";
    }
  };

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-3xl font-bold mb-4">📜 Timeline</h1>

        <div className="mb-8">
          <div className="relative w-full max-w-[200px]">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="
        w-full
        appearance-none
        bg-white
        border border-gray-200
        rounded-xl
        px-4 py-3 pr-10
        text-sm font-medium text-gray-700
        shadow-sm
        transition
        focus:outline-none
        focus:ring-2 focus:ring-emerald-500
        focus:border-emerald-500
        cursor-pointer
      "
            >
              <option value="All">Filter timeline</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>

            {/* Perfect Chevron Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-4">
          {filteredTimeline.length === 0 && (
            <p className="text-gray-400 ml-6">No activity found</p>
          )}

          {filteredTimeline.map((item) => (
            <div key={item.id} className="mb-10 ml-6 relative">
              {/* Dot */}
              <span
                className={`absolute -left-10 flex items-center justify-center w-8 h-8 rounded-full ${getColor(
                  item.type,
                )}`}
              >
                {getIcon(item.type)}
              </span>

              {/* Card */}
              <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
                <p className="font-semibold text-gray-800">{item.title}</p>

                <p className="text-sm text-gray-500 mt-1">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;

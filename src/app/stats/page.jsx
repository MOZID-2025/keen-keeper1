"use client";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = {
  Call: "#1f4d3f", // dark green
  Text: "#7c3aed", // purple
  Video: "#22c55e", // green
};

const AnalyticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    const formattedData = Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key],
    }));

    setData(formattedData);
  }, []);

  return (
    <div className=" bg-gray-50 p-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Friendship Analytics
        </h1>

        {/* Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-sm font-semibold text-emerald-700 mb-6">
            By Interaction Type
          </h2>

          {/* Chart */}
          <div className="w-full h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70} // donut style
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;

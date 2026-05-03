"use client";

import React, { use } from "react";
import {
  BellRing,
  Trash2,
  Phone,
  MessageSquare,
  Video,
  ChevronLeft,
  Calendar,
  Package,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import UseFriends from "@/app/hooks/useFriends";
import { toast } from "react-hot-toast";
export const addToTimeline = (entry) => {
  const existing = JSON.parse(localStorage.getItem("timeline")) || [];
  const updated = [entry, ...existing];
  localStorage.setItem("timeline", JSON.stringify(updated));
};

const FriendDetails = ({ params: paramsPromise }) => {
  const handleInteraction = (type) => {
    if (!friend) return;

    const entry = {
      id: Date.now(),
      type,
      date: new Date().toISOString(),
      title: `${type} with ${friend.name}`,
    };

    addToTimeline(entry);

    toast.success(`${type} with ${friend.name}`, {
      duration: 3000,
    });
  };
  const params = use(paramsPromise);
  const { friends, loading } = UseFriends();

  const friend = friends?.find((f) => String(f.id) === params.id);

  const getStatusStyle = (status) => {
    switch (status) {
      case "overdue":
        return "bg-[#FEE2E2] text-[#DC2626]";
      case "almost_due":
        return "bg-[#FEF3C7] text-[#D97706]";
      case "on_track":
        return "bg-[#DCFCE7] text-[#15803D]";
      default:
        return "bg-[#F3F4F6] text-[#6B7280]";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="p-8 text-center min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-700">
          Friend Not Found
        </h2>
        <Link href="/friends" className="text-emerald-600 mt-4 hover:underline">
          Back to Friends List
        </Link>
      </div>
    );
  }

  // ক্যালকুলেশন
  const daysSinceContact = friend.days_since_contact || 0;
  const goal = friend.goal || 30;
  const next_due_date = friend.next_due_date || 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Back Button */}
        <Link
          href="/friends"
          className="flex items-center text-gray-500 mb-8 hover:text-gray-800 transition w-fit group"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-medium">Back to Friends</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Side: Profile Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="relative w-32 h-32 mx-auto mb-5">
                <Image
                  src={friend.picture || "/man.png"}
                  alt={friend.name}
                  fill
                  className="rounded-full object-cover border-4 border-gray-50 shadow-sm"
                />
              </div>

              <h1 className="text-2xl font-bold text-gray-800">
                {friend.name}
              </h1>

              {/* Status Badge */}
              <div className="mt-3">
                <span
                  className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${getStatusStyle(friend.status)}`}
                >
                  {friend.status?.replace("_", " ")}
                </span>
              </div>

              {/* Tags Section */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {friend.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] capitalize font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 font-bold mt-6 italic leading-relaxed">
                {friend.bio}
              </p>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed ">
                {friend.email}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3.5 rounded-xl hover:bg-gray-50 transition font-medium text-gray-700 shadow-sm">
                <BellRing size={18} /> Snooze 2 weeks
              </button>

              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3.5 rounded-xl hover:bg-gray-50 transition font-medium text-gray-700 shadow-sm">
                <Package size={18} /> Archive
              </button>

              <button className="w-full flex items-center justify-center gap-3 bg-white border border-red-50 py-3.5 rounded-xl hover:bg-red-50 text-red-600 transition font-medium shadow-sm">
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>

          {/* Right Side: Stats & Communication */}
          <div className="md:col-span-8 space-y-6">
            {/* Detailed Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border text-center border-gray-100 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#244D3F] ">
                    {daysSinceContact}d
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">
                    Days Since Contact
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border text-center border-gray-100 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#244D3F]">
                    {goal}d
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">
                    Connection Goal
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border text-center border-gray-100 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#244D3F]">
                    {next_due_date}
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">
                    Next Due Date
                  </div>
                </div>
              </div>
            </div>

            {/* relationship goal */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="relative z-10 flex justify-between">
                <h4 className="font-bold text-xl mb-2">Relationship Goal</h4>

                <button className="border-2 border-gray-300 p-2">Edit</button>
              </div>
              <p className="text-emerald-50 opacity-90 max-w-md">
                Connect every {goal} days
              </p>
            </div>

            {/* Communication Hub */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <button
                  onClick={() => handleInteraction("Call")}
                  className="flex flex-col items-center py-8 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100"
                >
                  <Phone className="mb-3 text-gray-600 group-hover:text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-emerald-700">
                    Call
                  </span>
                </button>

                <button
                  onClick={() => handleInteraction("Text")}
                  className="flex flex-col items-center py-8 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100"
                >
                  <MessageSquare className="mb-3 text-gray-600 group-hover:text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-emerald-700">
                    Text
                  </span>
                </button>

                <button
                  onClick={() => handleInteraction("Video")}
                  className="flex flex-col items-center py-8 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all group border border-transparent hover:border-emerald-100"
                >
                  <Video className="mb-3 text-gray-600 group-hover:text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-emerald-700">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

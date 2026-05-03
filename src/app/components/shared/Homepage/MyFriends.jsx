// MyFriends.jsx

"use client";

import UseFriends from "@/app/hooks/useFriends";
import FriendCard from "./FriendCard";
import Link from "next/link";

const MyFriends = () => {
  const { friends, loading } = UseFriends();

  if (loading) {
    return (
      <div className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends?.map((friend) => (
          <Link key={friend.id} href={`/friends/${friend.id}`}>
            <FriendCard friend={friend} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyFriends;

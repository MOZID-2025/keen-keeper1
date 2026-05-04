import Image from "next/image";

const FriendCard = ({ friend }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "overdue":
        return "bg-[#FEE2E2] text-[#DC2626]"; // Red

      case "almost_due":
        return "bg-[#FEF3C7] text-[#D97706]"; // Yellow

      case "on_track":
        return "bg-[#DCFCE7] text-[#15803D]"; // Green

      default:
        return "bg-[#F3F4F6] text-[#6B7280]"; // Gray
    }
  };

  return (
    <div className="bg-white  rounded-xl shadow-sm p-5 text-center hover:shadow-md transition duration-300 cursor-pointer">
      <div className="w-[72px] h-[72px] mx-auto mb-4">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={72}
          height={72}
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{friend.name}</h3>

      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {friend.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] capitalize"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${getStatusStyle(
            friend.status,
          )}`}
        >
          {friend.status.replace("_", " ")}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;

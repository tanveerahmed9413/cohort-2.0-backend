import React from "react";

const Card = ({ image, username }) => {
  return (
    <div className="bg-zinc-300 flex items-center gap-4 shadow-md rounded-lg p-4 w-full">
      {/* Image */}
      <div className="w-14 h-14 flex-shrink-0">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={username}
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>

      {/* Username */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold truncate">{username}</h3>
      </div>

      {/* Button */}
      <div>
        <button
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default Card;

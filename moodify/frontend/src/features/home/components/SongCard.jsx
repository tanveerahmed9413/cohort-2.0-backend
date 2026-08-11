import React from "react";

const SongCard = ({ songUrl, title, posterUrl, mood }) => {
  return (
    <div
      className="group w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-[#0d121c] border
        border-white/[0.06]
        hover:bg-[#111722]
        hover:border-violet-500/20
        transition-all
        duration-200
      "
    >
      {/* ================= SONG INFO ================= */}

      <div className="flex items-center gap-4 min-w-0 flex-1">
        {/* Poster */}
        <div className="relative flex-shrink-0">
          <img
            src={posterUrl}
            alt="poster image"
            className="  w-14 h-14  rounded-lg  object-cover "
          />
        </div>

        {/* Title */}
        <div className="min-w-0">
          <h2 className="  text-sm  sm:text-base font-medium text-white truncate">
            {title}
          </h2>
        </div>
      </div>

      {/* ================= MOOD ================= */}

      <div className="  hidden  sm:block min-w-[100px] ">
        <span className=" inline-flex px-3 py-1  rounded-full  text-xs bg-violet-500/10 text-violet-400 border border-violet-500/10 capitalize">
          {mood || "Unknown"}
        </span>
      </div>
    </div>
  );
};

export default SongCard;

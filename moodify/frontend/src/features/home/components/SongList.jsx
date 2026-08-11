import React, { useEffect } from "react";
import SongCard from "./SongCard";
import { useHome } from "../hook/useHome";

const SongList = () => {
  const { songs, getSongs, loading } = useHome();

  useEffect(() => {
    getSongs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="  w-7 h-7   rounded-full  border-2  border-violet-500  border-t-transparent animate-spin " />
      </div>
    );
  }

  if (!songs || songs.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-500">No songs found</p>
      </div>
    );
  }

  return (
    <div>
      {songs.map((song) => (
        <SongCard
          key={song._id}
          songUrl={song.songUrl}
          posterUrl={song.posterUrl}
          title={song.title}
          mood={song.mood}
        />
      ))}
    </div>
  );
};

export default SongList;

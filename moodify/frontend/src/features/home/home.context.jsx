import React, { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  // localStorage se previous song restore
  const [currentSong, setCurrentSong] = useState(() => {
    const savedSong = localStorage.getItem("moodify-current-song");

    return savedSong ? JSON.parse(savedSong) : null;
  });

  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem("moodify-current-index");

    return savedIndex ? Number(savedIndex) : -1;
  });

  const playSong = (song, index) => {
    setCurrentSong(song);
    setCurrentIndex(index);

    localStorage.setItem("moodify-current-song", JSON.stringify(song));

    localStorage.setItem("moodify-current-index", String(index));
  };

  const nextSong = () => {
    if (!songs?.length) return;

    const nextIndex = currentIndex >= songs.length - 1 ? 0 : currentIndex + 1;

    const next = songs[nextIndex];

    setCurrentSong(next);
    setCurrentIndex(nextIndex);

    localStorage.setItem("moodify-current-song", JSON.stringify(next));

    localStorage.setItem("moodify-current-index", String(nextIndex));
  };

  const previousSong = () => {
    if (!songs?.length) return;

    const previousIndex =
      currentIndex <= 0 ? songs.length - 1 : currentIndex - 1;

    const previous = songs[previousIndex];

    setCurrentSong(previous);
    setCurrentIndex(previousIndex);

    localStorage.setItem("moodify-current-song", JSON.stringify(previous));

    localStorage.setItem("moodify-current-index", String(previousIndex));
  };

  return (
    <HomeContext.Provider
      value={{
        songs,
        setSongs,

        loading,
        setLoading,

        currentSong,
        setCurrentSong,

        currentIndex,
        setCurrentIndex,

        playSong,
        nextSong,
        previousSong,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

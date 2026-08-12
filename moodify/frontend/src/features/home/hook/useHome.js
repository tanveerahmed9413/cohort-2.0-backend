import { useContext } from "react";

import { HomeContext } from "../home.context";
import { getAllSongs } from "../services/home.api";

export const useHome = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error("useHome must be used inside HomeProvider");
  }

  const {
    songs,
    setSongs,

    loading,
    setLoading,

    currentSong,
    setCurrentSong,

    currentIndex,
    setCurrentIndex,
  } = context;

  // =========================
  // GET ALL SONGS
  // =========================

  const getSongs = async () => {
    try {
      setLoading(true);

      const response = await getAllSongs();

      setSongs(response);

      return response;
    } catch (error) {
      console.error("Get songs error:", error);
    } finally {
      setLoading(false);
    }
  };

  const playSong = (song, index) => {
    setCurrentSong(song);
    setCurrentIndex(index);
  };

  const nextSong = () => {
    if (!songs || songs.length === 0) return;

    const nextIndex = currentIndex + 1;

    // Last song par ho to first song
    if (nextIndex >= songs.length) {
      setCurrentIndex(0);
      setCurrentSong(songs[0]);

      return;
    }

    setCurrentIndex(nextIndex);
    setCurrentSong(songs[nextIndex]);
  };

  const previousSong = () => {
    if (!songs || songs.length === 0) return;

    const previousIndex = currentIndex - 1;

    // First song par ho to last song
    if (previousIndex < 0) {
      const lastIndex = songs.length - 1;

      setCurrentIndex(lastIndex);
      setCurrentSong(songs[lastIndex]);

      return;
    }

    setCurrentIndex(previousIndex);
    setCurrentSong(songs[previousIndex]);
  };

  return {
    songs,
    loading,
    getSongs,

    currentSong,
    currentIndex,

    playSong,
    nextSong,
    previousSong,
  };
};

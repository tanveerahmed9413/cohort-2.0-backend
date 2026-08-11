import { useContext } from "react";
import { HomeContext } from "../home.context";
import { getAllSongs } from "../services/home.api";

export const useHome = () => {
  const context = useContext(HomeContext);

  const { songs, loading, setLoading, setSongs } = context;

  async function getSongs() {
    try {
      setLoading(true);
      const response = await getAllSongs();
      console.log(response);
      setSongs(response);
      return response;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    songs,
    getSongs,
  };
};

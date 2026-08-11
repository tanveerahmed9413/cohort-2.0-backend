import React, { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <HomeContext.Provider value={{ songs, setSongs, loading, setLoading }}>
      {children}
    </HomeContext.Provider>
  );
};

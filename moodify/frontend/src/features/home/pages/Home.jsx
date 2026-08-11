import React from "react";

import SongList from "../components/SongList";

const Home = () => {
  return (
    <section className="py-6">
      <div className="mb-6">
        <p className="mt-2 text-gray-400">Find music that matches your mood.</p>
      </div>

      <SongList />
    </section>
  );
};

export default Home;

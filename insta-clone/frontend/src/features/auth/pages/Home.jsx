import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-lg p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Home Page 👋
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Explore, connect, and share your amazing moments with the world.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Explore
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            View Profile
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;

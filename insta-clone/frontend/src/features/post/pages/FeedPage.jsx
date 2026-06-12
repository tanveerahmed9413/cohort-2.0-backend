import React, { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import Navbaar from "../components/Navbaar";
import Profile from "../components/Profile";

const FeedPage = () => {
  let { handleGetFeed, loading, feed } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white px-8 py-6 rounded-2xl shadow-md text-center">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 font-medium">Loading...</p>
        </div>
      </main>
    );
  }

  console.log(feed);

  return (
    <div className="max-w-7xl mx-auto flex gap-6 ">
      <div className="w-[30%] left-sidebar  py-4 px-3 fixed ">
        <Profile />
      </div>
      <div className="w-[70%] right-sidebar p-6  items-center ml-[30%]">
        <div className="navbar w-full flex justify-between">
          <Navbaar />
        </div>
        <div className="feed-page grid grid-cols-2  min-h-screen items-center gap-6 py-2">
          {feed.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;

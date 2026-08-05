import React, { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import Navbaar from "../components/Navbaar";
import Profile from "../components/Sidebar";
// import FollowingList from "../../follow/pages/FollowingList";


const FeedPage = () => {
  let { handleGetFeed, loading,setLoading, feed } = usePost();

  useEffect(() => {
    let loadFeed = () =>{
      setLoading()
       handleGetFeed()
      setLoading(false)
    }
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
      {/* <div className="w-[25%] left-sidebar  py-4 px-3 fixed ">
        <FollowingList />
      </div> */}
      <div className="w-full right-sidebar p-6  items-center">
        <div className="navbar w-full flex justify-between">
          <Navbaar />
        </div>
        <div className="feed-page grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen items-center gap-6 py-2">
          {feed.map((post) => {
            return <Post key={post._id} post={post}/> ;
            
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;

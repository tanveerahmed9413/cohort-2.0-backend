import React, { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";


const FeedPage = () => {

  let {handleGetFeed,loading,feed} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])

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

  console.log(feed)

  return (
    <div className="flex flex-col  min-h-screen items-center gap-1 py-2">
      {feed.map((post)=>{
        return <Post key={post._id} post={post}/>
      })}
    </div>
  );
};

export default FeedPage;

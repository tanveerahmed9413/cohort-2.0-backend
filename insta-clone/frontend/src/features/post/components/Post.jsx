import React from "react";
import { Bookmark, CircleCheck,Heart,MessageCircle,Share2 } from "lucide-react";
import   "../shared/style.scss"

const Post = ({ post }) => {
  console.log(post.isLiked);
  return (
   <div className="w-[360px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center gap-3">
         <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src={post.user.profileImage}
              alt=""
            />
          </div>

          <div>
            <div className="flex items-center gap-1">
              <h2 className="font-bold text-white">{post.user.username}</h2>

              <CircleCheck size={22} className="text-white-500 fill-blue-500" />
              
            </div>
          </div>
        </div>

        <button className="text-zinc-400 text-xl">⋮</button>
      </div>

      {/* Image */}
      <div className="overflow-hidden w-full">
        <img
          className="w-full h-[320px] object-cover"
          src={post.imageUrl}
          alt=""
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-5 text-zinc-300">
          {/* <Heart/> */}
          <Heart className={`cursor-pointer transition ${post.isLiked ? "like" : ""}`}/>
          <MessageCircle />
          <Share2 />
        </div>

        <Bookmark className="cursor-pointer hover:text-yellow-500 transition" />
      </div>

      {/* Likes */}
      <div className="px-4">
        <h3 className="font-semibold text-white">12,458 likes</h3>
      </div>

      {/* Caption */}
      <div className="px-4 py-3">
        <p className="text-zinc-400 text-sm">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;

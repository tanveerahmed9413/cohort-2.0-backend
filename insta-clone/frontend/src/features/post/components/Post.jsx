import React from "react";
import { Bookmark, CheckCircle,Heart,MessageCircle,Share2 } from "lucide-react";
import   "../shared/style.scss"

const Post = ({ post }) => {
  console.log(post.isLiked);
  return (
    <div className="w-[420px] rounded-3xl overflow-hidden bg-orange-900 border border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src={post.user.profileImage}
              alt=""
            />
          </div>

          <div>
            <div className="flex items-center gap-1">
              <h2 className="font-bold text-white">{post.user.username}</h2>

              <CheckCircle size={16} className="text-blue-500 fill-blue-500" />
            </div>
          </div>
        </div>

        <button className="text-zinc-400 text-xl">⋮</button>
      </div>

      {/* Image */}
      <div className="overflow-hidden w-full">
        <img
          className="w-full h-[450px] object-cover"
          src={post.imageUrl}
          alt=""
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex gap-5">
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
        <p className="text-zinc-300">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;

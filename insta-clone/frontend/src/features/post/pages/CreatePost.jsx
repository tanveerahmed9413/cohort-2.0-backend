import React, { useRef, useState } from 'react';
import { Image, Type, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const [caption, setCaption] = useState('')
    const postImageFileRef = useRef(null)

    let navigate = useNavigate()

    let {loading,feed,handleCreatePost} = usePost()

  async function submitHandler(e){
    e.preventDefault()

    let file = postImageFileRef.current.files[0]

    await handleCreatePost(file,caption)
    
    navigate('/')


 }


 if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white px-8 py-6 rounded-2xl shadow-md text-center">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 font-medium">Creating Post...</p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <Link to="/" className="text-zinc-400 hover:text-white transition">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-semibold text-lg">Create new post</h1>
          <div className="w-5"></div> 
        </div>

        {/* Form Container */}
        <form onSubmit={submitHandler} className="p-6 space-y-6">
          
          {/* File Upload Area */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
              <Image size={16} /> Post Media
            </label>
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-zinc-700 hover:border-blue-500 bg-zinc-800/30 hover:bg-zinc-800/60 rounded-xl cursor-pointer transition group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                <div className="p-3 bg-zinc-800 rounded-full text-zinc-400 group-hover:text-blue-500 group-hover:scale-110 transition mb-3">
                  <Image size={24} />
                </div>
                <p className="text-sm font-medium text-zinc-300">Click to upload photo</p>
                <p className="text-xs text-zinc-500 mt-1">PNG, JPG, or WEBP up to 10MB</p>
              </div>
              <input type="file" ref={postImageFileRef} className="hidden" accept="image/*" />
            </label>
          </div>

          {/* Caption Input */}
          <div className="space-y-2">
            <label htmlFor="caption" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
              <Type size={16} /> Caption
            </label>
            <textarea
              id="caption"
              value={caption}
              onChange={(e)=>{setCaption(e.target.value)}}
              rows="3"
              placeholder="Write a caption... Use #hashtags or @mention friends"
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl placeholder-zinc-500 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none text-sm"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-[0.98] transition duration-200"
          >
            Share Post
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreatePost;

import {  useContext, useEffect } from "react";
import { getFeed , createPost,likePost,unLikePost } from "../services/post.api";
import {PostContext} from "../post.context"



export  function usePost() {
    const context  = useContext(PostContext)

   let {loading,setLoading,post,setPost,setFeed,feed} = context

    let handleGetFeed = async()=>{
        setLoading(true)
        let data = await getFeed()
        setFeed(data.allPost)
        console.log("🔥 FEED API CALLED");
        setLoading(false)
    }

    let handleCreatePost = async(imageFile,caption)=>{
        setLoading(true)
        let data = await createPost(imageFile,caption)
        setFeed([data.post,...feed])
        setLoading(false)
        
    }
    let handleLikePost = async(postId)=>{
        let data = await likePost(postId)
       await handleGetFeed()
    }
    let handleUnlikePost = async(postId)=>{
        let data = await unLikePost(postId)
       await handleGetFeed()
    }
   

    return (
        {loading,feed,post,handleGetFeed,handleCreatePost,handleLikePost,handleUnlikePost}
    )
}
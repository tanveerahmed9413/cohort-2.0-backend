import {  useContext, useEffect } from "react";
import { getFeed , createPost } from "../services/post.api";
import {PostContext} from "../post.context"



export  function usePost() {
    const context  = useContext(PostContext)

   let {loading,setLoading,post,setPost,setFeed,feed} = context

    let handleGetFeed = async()=>{
        setLoading(true)
        let data = await getFeed()
        setFeed(data.allPost)
        setLoading(false)
    }

    let handleCreatePost = async(imageFile,caption)=>{
        setLoading(true)
        let data = await createPost(imageFile,caption)
        setFeed([data.post,...feed])
        setLoading(false)
        
    }
   

    return (
        {loading,feed,post,handleGetFeed,handleCreatePost}
    )
}
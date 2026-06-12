import {  useContext } from "react";
import { getFeed } from "../services/post.api";
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

    return (
        {loading,feed,post,handleGetFeed}
    )
}
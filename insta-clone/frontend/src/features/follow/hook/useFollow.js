import { useContext } from "react";
import { getFollowerList, getFollowingList } from "../services/follow.api";
import { followContext } from "../follow.context";

export function useFollow() {
  let context = useContext(followContext);

  let {
    loading,
    setLoading,
    followingList,
    setFollowingList,
    followerList,
    setFollowerList,
  } = context;

  let handleFollowingList = async () => {
    
    setLoading(true);
    let data = await getFollowingList();
    setFollowingList(data.user);
    setLoading(false);
  };
  let handleFollowerList = async ()=>{
    setLoading(true)
    let data = await getFollowerList();
    setFollowerList(data.user)
    setLoading(false)
  }

  return {
    loading,
    setLoading,
    followingList,
    followerList,
    handleFollowingList,
    handleFollowerList,
  };
}

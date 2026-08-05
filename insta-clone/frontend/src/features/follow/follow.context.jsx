import { useState } from "react";
import { createContext } from "react";
import { getFollowingList } from "./services/follow.api";

export const followContext = createContext()

export function FollowProvider({children}) {

    const [loading, setLoading] = useState(false)
    const [followingList, setFollowingList] = useState([])
    const [followerList, setFollowerList] = useState([])


        return (
        <followContext.Provider value={{loading,setLoading,followingList,setFollowingList,followerList,setFollowerList}}>
            {children}
        </followContext.Provider>
    )
}
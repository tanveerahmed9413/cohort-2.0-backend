import React, { useEffect } from "react";
import { useFollow } from "../hook/useFollow";
import Card from "../components/Card";

const FollowingList = () => {
  let { loading, followingList, handleFollowingList } = useFollow();

  useEffect(() => {
    handleFollowingList();
  }, []);
  
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 ">
      {followingList?.map((user) => (
        <Card
          key={user._id}
          image={user.profileImage}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default FollowingList;

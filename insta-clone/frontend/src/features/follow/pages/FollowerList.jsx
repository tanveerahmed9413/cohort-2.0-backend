import React, { use, useEffect } from "react";

import { useFollow } from "../hook/useFollow";
import Card from "../components/Card";

const FollowerList = () => {
  let { loading, followerList, handleFollowerList } = useFollow();

  useEffect(() => {
    handleFollowerList();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {followerList.map((user) => (
        <Card
          key={user._id}
          image={user.profileImage}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default FollowerList;

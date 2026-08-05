import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import FollowerList from "../../follow/pages/FollowerList";
import FollowingList from "../../follow/pages/FollowingList";

const Profile = () => {
  let { loading, user, handleProfile } = useAuth();

  useEffect(() => {
    handleProfile();
  }, []);

  if (loading) {
    return <p>Loading... </p>;
  }

  // if(!user){
  //   return <p>user not found</p>
  // }

  
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* User Details */}
      <div className="flex items-center gap-6 border-b pb-6 mb-6">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.username}</p>
          <p className="mt-2 text-gray-700">{user.bio}</p>
        </div>
      </div>

      {/* Layout for Followers & Following */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Followers Section  */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Followers</h3>
          <div className="h-80 overflow-y-scroll scrollbar-none">
            <FollowerList />
          </div>
        </div>

        {/* Following Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Following</h3>
          <div className="h-80 overflow-y-scroll scrollbar-none">
            <FollowingList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

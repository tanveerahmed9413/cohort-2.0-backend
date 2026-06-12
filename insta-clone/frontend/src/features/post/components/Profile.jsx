import React from "react";

const Profile = () => {
  return (
    <div className="">
      <div className="flex flex-col  items-center">
        <img
          src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />

        <h2 className="mt-4 text-xl font-semibold">Tanveer Ahmed</h2>

        <p className="text-zinc-400 text-sm">Frontend Developer</p>
      </div>

      {/* Stats */}
      <div className="flex justify-around mt-6 text-center">
        <div>
          <h3 className="font-bold">120</h3>
          <p className="text-zinc-400 text-sm">Posts</p>
        </div>

        <div>
          <h3 className="font-bold">850</h3>
          <p className="text-zinc-400 text-sm">Followers</p>
        </div>

        <div>
          <h3 className="font-bold">210</h3>
          <p className="text-zinc-400 text-sm">Following</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Bio</h3>
        <p className="text-zinc-400 text-sm">
          Learning MERN Stack 🚀
          <br />
          Building cool projects every day.
        </p>
      </div>
    </div>
  );
};

export default Profile;

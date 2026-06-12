import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { loading, handleRegister } = useAuth();

if (loading) {
  return (
     <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-8 py-6 rounded-2xl shadow-md text-center">
        <div className="w-6 h-6 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
        <p className="mt-3 font-medium">Loading...</p>
      </div>
    </main>
  );
}

  const formHandler = (e) => {
    e.preventDefault();

    handleRegister(username, email, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-black cursor-pointer text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </form>

        {/* Redirect */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

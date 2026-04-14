import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function formHandler(e) {
    e.preventDefault()

      axios.post("http://localhost:3000/api/auth/register",{
        username,
        email,
        password
    })
    .then((res)=>{
      console.log(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
    
  }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-md">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Signup
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4"
          onSubmit={formHandler}
        >
          
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
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
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')

const submitHandler = (e) =>{
   e.preventDefault()

   axios.post("http://localhost:3000/api/auth/login",{
    username: userName,
    password,
   },{withCredentials: true})
   .then((res)=>{
    console.log(res.data);
    
   })
   .catch((err)=>{
    console.log(err)
   })
}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-md">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4"
        onSubmit={submitHandler}
        >
          
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e)=>setUserName(e.target.value)}
            value={userName}
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
            className="bg-black cursor-pointer text-white py-2 rounded-lg hover:bg-gray-800 transition"
           
          >
            Login
          </button>
        </form>

        {/* Extra */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link to={"/signup"}>Signup</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
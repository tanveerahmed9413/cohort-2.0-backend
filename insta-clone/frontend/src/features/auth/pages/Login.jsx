import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


 
  const navigate = useNavigate();

  const { handleLogin, loading } = useAuth();

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

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(username, password).then((res) => {
  
      console.log("LOGIN RESPONSE:", res);
      localStorage.setItem("token", res.token);
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
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

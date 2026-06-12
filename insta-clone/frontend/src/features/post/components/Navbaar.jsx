import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import CreatePost from "../pages/CreatePost";

function Navbar() {
  return (
    <nav className="w-full h-16 px-8 border-b border-zinc-700 rounded-xl bg-black text-white flex items-center justify-between">
      {/* Left Side */}
      <h1 className="text-2xl font-bold">InstaClone</h1>

      {/* Right Side */}
      <Link to={"/create-post"}>
        <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          <Plus size={18} />
          <span>Create Post</span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;

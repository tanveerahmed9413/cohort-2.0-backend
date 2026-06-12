import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Signup from "./features/auth/pages/Signup";
import Home from "./features/auth/pages/Home";
import ProtectedRoute from "./features/post/components/ProtectedRoute";
import FeedPage from "./features/post/pages/feedPage";
import CreatePost from "./features/post/pages/CreatePost";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ProtectedRoute><FeedPage/></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;

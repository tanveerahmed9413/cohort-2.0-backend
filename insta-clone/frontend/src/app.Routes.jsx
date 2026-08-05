import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Signup from "./features/auth/pages/Signup";
import ProtectedRoute from "./features/post/components/ProtectedRoute";
import FeedPage from "./features/post/pages/feedPage";
import CreatePost from "./features/post/pages/CreatePost";
import Profile from "./features/auth/pages/Profile";


const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><FeedPage/></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;

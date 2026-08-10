import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="*" element={<h3>Not Found</h3>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;

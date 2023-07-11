import { Routes, Route } from "react-router-dom";

import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

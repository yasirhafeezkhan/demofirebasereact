import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthLogin";
export default function AuthRequire({ children }) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
}

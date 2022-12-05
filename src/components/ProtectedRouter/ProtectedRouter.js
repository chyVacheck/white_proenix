import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute({
  loggedIn,
  children,
  navigate = 'You_are_not_logged_in'
}) {
  return loggedIn ? children : <Navigate to={`/${navigate}`} />
}
export default ProtectedRoute;
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

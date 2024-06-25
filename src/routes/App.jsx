import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import "./App.css";
import { LoginAndSignUp } from "../components/LoginAndSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginAndSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

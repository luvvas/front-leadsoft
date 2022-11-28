import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalCSS from "./global.css";

import { AuthContext, useAuthContext } from "./contexts/Auth";
import { Login } from "./pages/Login";

interface AuthenticationProps {
  isAuth: boolean;
}

const AuthRoute = ({ isAuth }: AuthenticationProps) =>
  isAuth ? <Outlet /> : <Navigate to="/login" replace />;

export default function App() {
  const { isAuth } = useAuthContext();

  return (
    <>
      <GlobalCSS />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<AuthRoute isAuth={isAuth} />}>
          <Route path="/home" element={<h1>HOME</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <ToastContainer style={{ width: "30px", height: "30px" }} />
    </>
  );
}

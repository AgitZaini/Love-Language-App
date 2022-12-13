import { Navigate } from "react-router-dom";

export default function guard({ children }) {
    const isLogin = localStorage.getItem("access_token");
    if (!isLogin) return <Navigate to="/" replace />;
    return children;
}

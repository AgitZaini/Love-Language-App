import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

export default function LoginPage(params) {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const handleOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/login", input)
            .then(({ data }) => {
                localStorage.setItem("access_token", data.access_token);
                navigate("/");
            })
            .catch((err) => console.log(err.response.data));
    };
    return (
        <>
            <div className="login-card">
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                    <input type="text" placeholder="Email" value={input.email} name="email" onChange={handleOnChange} />
                    <input type="password" placeholder="Password" value={input.password} name="password" onChange={handleOnChange} />
                    <a href="" onClick={() => navigate("/register")}>
                        Didn't have an account?
                    </a>
                    <button onClick={handleSubmit}>LOGIN</button>
                </form>
            </div>
        </>
    );
}

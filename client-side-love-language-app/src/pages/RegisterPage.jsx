import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

export default function RegisterPage(params) {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/register", input)
            .then(({ data }) => {
                console.log(data);
                localStorage.setItem("access_token", data.access_token);
                navigate("/");
            })
            .catch((err) => console.log(err.response.data));
    };
    return (
        <>
            <div className="login-card">
                <h2>Register</h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                    <input type="text" placeholder="Name" value={input.name} name="name" onChange={handleOnChange} />
                    <input type="email" placeholder="Email" value={input.email} name="email" onChange={handleOnChange} />
                    <input type="password" placeholder="Password" value={input.password} name="password" onChange={handleOnChange} />
                    <a href="" onClick={() => navigate("/login")}>
                        Have an account?
                    </a>
                    <button onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </>
    );
}

import logo from "../../style/images/Logo.png";
import "../../style/style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar({ isLogin }) {
    // console.log(isLogin);
    const navigate = useNavigate();

    if (!isLogin)
        return (
            <>
                <div className="navbar">
                    <div className="navbar-action">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                        <ul className="navbar-menu">
                            <li>
                                <Link href="" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="" to={"/about"}>
                                    About
                                </Link>
                            </li> */}
                            <li>
                                <Link href="" to={"/type"}>
                                    Love Language Type
                                </Link>
                            </li>
                        </ul>
                        <button className="login button" onClick={() => navigate("/login")}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </>
        );
    else if (isLogin === "login") {
        return (
            <>
                <div className="navbar">
                    <div className="navbar-action">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                        <ul className="navbar-menu">
                            <li>
                                <Link href="" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="" to={"/result"}>
                                    Result
                                </Link>
                            </li>
                            <li>
                                <Link href="" to={"/type"}>
                                    Love Language Type
                                </Link>
                            </li>
                        </ul>
                        <button className="login button" style={{ color: "red" }} onClick={() => {
                            localStorage.clear() 
                            navigate("/")
                        }}>
                            LOGOUT
                        </button>
                    </div>
                </div>
            </>
        );
    } else if (isLogin === "question") {
        return (
            <>
                <div className="navbar">
                    <div className="navbar-action">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

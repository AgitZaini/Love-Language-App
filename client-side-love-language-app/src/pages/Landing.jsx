import "../style/style.css";
import CardImage from "../style/images/BackgroundImageCard.png";
import Navbar from "./component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Landing() {
    const navigate = useNavigate();
    let [result, setResult] = useState({});
    const validated = localStorage.getItem("access_token");
        useEffect(() => {
            if(!validated){
                setResult({code: "no"})
            }else{
                axios({
                    method: "get",
                    url: "main/resultUser",
                    headers: {
                        access_token: validated,
                    },
                })
                    .then(({ data }) => {
                        setResult(data);
                    })
                    .catch((error) => console.log(error.message))
            }
            
        }, [])
    const clickStart = () => {
        navigate(validated ? (
            "no" == result.code? "/question": "/result"
            ) : "/login")
    }
    return (
        <>
            <div className="defaultBg">
                <div className="card">
                    <Navbar isLogin={validated ? "login" : null} />
                    <div className="backgroundImageCard">
                        <img src={CardImage} alt="" />
                    </div>
                    <div className="content">
                        <h1>FIND YOUR LOVE LANGUAGE</h1>
                        <div className="line"></div>
                        <p>Take an approach by knowing the love language of your partner and yourself</p>
                        <button className="getStarted button" onClick={() => clickStart()}>
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

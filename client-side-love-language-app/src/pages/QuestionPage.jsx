import "../style/style.css";
import CardImage from "../style/images/BackgroundImageCard.png";
import Navbar from "./component/Navbar";
import exit from "../style/images/Exit.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import rumusOption from "../helpers/rumusOption";
export default function QuestionPage() {
    const [result, setResult] = useState("");
    const [soal, setSoal] = useState([]);
    const [angka, setAngka] = useState(0);
    const [active, setActive] = useState({
        first: "",
        second: "",
    });
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("/main/soals", {})
            .then(({ data }) => {
                console.log(data);
                setSoal(data);
                console.log(result, "FINAL UE1");
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        console.log(result.length, "Final Length UE2");
        if (result.length == 30) {
            console.log(result, "FINAL");
            axios({ 
                method:"post",
                url: "/main/result", 
                data: {resultCollection: result},
                headers: {access_token: token}
            }
            )
            .then(({ data }) => {
                console.log(data, "Berhasil");
                navigate("/result")
            })
                .catch((err) => console.log(err.message));
        }
    }, [angka]);

    const clickNext = (e) => {
        e.preventDefault();
        if (active.first === "selected" || active.second === "selected") {
            // console.log(active.first, "1");
            // console.log(active.second, "2");
            let code;
            active.first === "selected" ? (code = rumusOption(angka + 1, 0)) : (code = rumusOption(angka + 1, 1));
            if (angka == 0) {
                setResult(code);
                setAngka(1);
                setActive({ first: "", second: "" });
            } else if (angka >= 1 && angka < 29) {
                setResult(result + code);
                setAngka(angka + 1);
                setActive({ first: "", second: "" });
            }
        } else {
            console.log("Belum Ada Option Yang di Pilih");
        }
    };
    const clickFinish = (e) => {
        e.preventDefault(e);
        if (active.first == "selected" || active.second == "selected") {
            let code;
            active.first == "selected" ? (code = rumusOption(angka + 1, 0)) : (code = rumusOption(angka + 1, 1));
            setResult(result + code);
            setActive({ first: "", second: "" });
            setAngka(angka + 1);
        } else {
            console.log("Belum Ada Option Yang di Pilih");
        }
    };

    return (
        <div className="defaultBg">
            <div className="card">
                <Navbar isLogin={"question"} />
                <div className="backgroundImageCard">
                    <img src={CardImage} alt="" />
                </div>
                {soal.map((el, i) => {
                    if (i === angka && i < 30) {
                        return (
                            <>
                                <div className="content-question">
                                    <h1>
                                        Pertanyaan <span>{el.no}</span>/30
                                    </h1>
                                    <h2>Lebih Berkesan bagi saya ketika . . . </h2>
                                    <div className="option">
                                        <div
                                            className={`option1 ${active.first}  `}
                                            name="option1"
                                            id="first"
                                            onClick={() => {
                                                setActive({ first: "selected", second: "" });
                                            }}
                                        >
                                            <p>{el.option1}</p>
                                            {/* <p>"Pasangan saya secara tidak disangka melakukan sesuatu untuk saya seperti mengisi penuh bahan bakar mobil saya atau mencuci pakaian"</p> */}
                                        </div>
                                        <div
                                            className={`option2 ${active.second} `}
                                            name="option2"
                                            id="second"
                                            onClick={() => {
                                                setActive({ first: "", second: "selected" });
                                            }}
                                        >
                                            <p>{el.option2}</p>
                                            {/* <p>"Saya saling bersentuhan dengan pasangan saya"</p> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    }
                })}
                <div className="content-button">
                    <div className="exit">
                        <button onClick={() => navigate("/")}>
                            <img src={exit} alt="" />
                        </button>
                    </div>
                    <div className="next-back">
                        {/* <button className="back button getStarted " onClick={() => setAngka(angka - 1)}>
                                BACK
                            </button> */}
                        {/* <button className="next button getStarted" onClick={clickNext}> */}
                        {angka < 29 ? (
                            <button className="next button getStarted" onClick={clickNext}>
                                NEXT
                            </button>
                        ) : (
                            <button className="finish button getStarted" onClick={clickFinish}>
                                FINISH
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
